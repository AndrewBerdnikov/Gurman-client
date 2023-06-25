import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import SearchTop from '../components/search bar/SearchTop';
import RecipeAside from '../components/aside bar/RecipeAside';
import { Context } from '..';

import imgOne from  '../images/PersonBlack.png';
import imgTwo from '../images/ClockBlack.png';
import imgThree from '../images/FindImg.png';

import jwt from 'jwt-decode';
import { createRecipe } from '../components/http/recipeApi';
import { getRecipes } from '../components/http/recipeApi';
import { createFastInfo, createMainInfo, createSteps, createStructure } from '../components/http/recipeInfoApi';
import { createVideoRecipe, getVideoRecipes } from '../components/http/videoRecipeApi';

const AddVideoRecipePage = observer(() => {
    const {recipes, user} = useContext(Context);
    const [steps, setSteps] = useState([]);
    const [structure, setStructure] = useState([]);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [preparation, setPreparation] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [persons, setPersons] = useState('');
    const [recipeId, setRecipeId] = useState('');

    const currentUser = jwt(localStorage.getItem('token'));

    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFiltersChange = (filters) => {
        setSelectedFilters(filters);
    };


    const addSteps = () => {
        setSteps([...steps, {recipeId: '', img: '', steps: '', number: Date.now()}]);
    }

    const addStructure = () => {
        setStructure([...structure, {recipeId: '', productsId: '', value: '', number: Date.now()}]);
    }

    const removeStep = (number) => {
        setSteps(steps.filter(step => step.number !== number));
    }

    const removeStructure = (number) => {
        setStructure(structure.filter(ingridient => ingridient.number !== number));
    }

    const changeSteps = (img, number, recipeId, oneStep) => {
        setSteps(steps.map(step => step.number === number ? {...step, img: img, recipeId: recipeId, steps: oneStep} : step));
    }

    const changeStructure = (recipeId, productsId, value, number) => {
        setStructure(structure.map(ingridient => ingridient.number === number ? {...ingridient, recipeId: recipeId, productsId: productsId, value: value} : ingridient));
    }

    const addVideoRecipe = async () => {
        await createVideoRecipe(currentUser.id, name, '', link, description, '2023-06-12');
        await getVideoRecipes().then(data => recipes.setVideoRecipes(data.results));
        setRecipeId(recipes.videoRecipes[recipes.videoRecipes.length - 1].id);
        // const formData = new FormData();
        // formData.append('userId', currentUser.id);
        // formData.append('title', name);
        // formData.append('img', file);
        // formData.append('video', '');
        // formData.append('description', description);
        // formData.append('generatedd', '2023-06-02');
        // await createRecipe(formData)
        // await getRecipes().then(data => recipes.setRecipes(data.results));
        // setRecipeId(recipes.recipes[recipes.recipes.length - 1].id);
    }

    const addInfoRecipe = async () => {
        console.log(steps)
        structure.map((i) => {
            createStructure(recipeId, i.productsId, i.value);
        });
        createFastInfo(recipeId, persons, preparation, cookingTime);
        createMainInfo(recipeId, selectedFilters[2], selectedFilters[0], selectedFilters[3], selectedFilters[4]);
        steps.map((i) => {
            createSteps(recipeId, '2312', i.steps);
        });
    }

    return (
        <div className='add-recipe-page'>
            <div className='container'>
                <div className='add-recipe-page-content'>
                    <SearchTop />
                    <div className='add-recipe-page-info'>
                        <div className='add-recipe-page-info-aside'>
                           <RecipeAside onFiltersChange={handleFiltersChange}/> 
                        </div>
                        <div className='add-recipe-page-info-main'>
                            <p className='add-recipe-page-info-main__title'>Название:</p>
                            <p><input type='text' placeholder='Введите название...' value={name} onChange={(e) => setName(e.target.value)} className='add-recipe-page-info-main__name'></input></p>
                            <p className='add-recipe-page-info-main__title'>Добавте ссылку на видео с Youtube:</p>
                            <div className='add-recipe-page-info-main-file'>
                                <input type='text' placeholder='Добавте ссылку...' value={link} onChange={e => setLink(e.target.value)} className='add-recipe-page-info-main-file__input'></input>
                            </div>
                            <p className='add-recipe-page-info-main__title'>Добавте описание:</p>
                            <textarea placeholder='Добавте описание...' value={description} onChange={(e) => setDescription(e.target.value)} className='add-recipe-page-info-main__description'></textarea>
                            <button onClick={addVideoRecipe} className='add-recipe-page-info-main__button'>Добавить рецепт</button>
                            <p className='add-recipe-page-info-main__title'>Информация:</p>
                            <div className='add-recipe-page-info-main-fast-info'>
                                <div className='add-recipe-page-info-main-fast-info__item'>
                                    <img src={imgTwo} alt='Картинка' className='add-recipe-page-info-main__img'></img>
                                    <input type='text' value={preparation} onChange={(e) => setPreparation(e.target.value)} className='add-recipe-page-info-main__input'></input>
                                    <span>Время подготовки(В минутах)</span>
                                </div>
                                <div className='add-recipe-page-info-main-fast-info__item'>
                                    <img src={imgTwo} alt='Картинка' className='add-recipe-page-info-main__img'></img>
                                    <input type='text' value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} className='add-recipe-page-info-main__input'></input>
                                    <span>Время готовки(В минутах)</span>
                                </div>
                                <div className='add-recipe-page-info-main-fast-info__item'>
                                    <img src={imgOne} alt='Картинка' className='add-recipe-page-info-main__img'></img>
                                    <input type='text' value={persons} onChange={(e) => setPersons(e.target.value)} className='add-recipe-page-info-main__input'></input>
                                    <span>На сколько человек</span>
                                </div>
                            </div>
                            {/* <div className='add-recipe-page-info-main-structure'>
                                <p className='add-recipe-page-info-main__title'>Ингридиенты:</p>
                                <button onClick={addStructure} className='add-recipe-page-info-main-structure__button'>Добавить ингридиент</button>
                                <div className='add-recipe-page-info-main-structure-ingridient'>
                                    {structure.map(ingridient => 
                                        <div key={ingridient.number} className='add-recipe-page-info-main-structure-ingridient-item'>
                                            <select value={ingridient.productId} onChange={e => changeStructure(recipeId, e.target.value, ingridient.value, ingridient.number)}>
                                                {recipes.products.map(product => (
                                                    <option key={product.name}>{product.name}</option>
                                                ))}
                                            </select>
                                            <input type='text' placeholder='Кол-во' value={ingridient.value} onChange={e => changeStructure(recipeId, ingridient.productsId, e.target.value, ingridient.number)}></input>
                                            <select>
                                                <option>гр</option>
                                                <option>на глаз</option>
                                                <option>щепотка</option>
                                                <option>пакет(ов)</option>
                                                <option>шт.</option>
                                            </select>
                                            <button onClick={() => removeStructure(ingridient.number)} className='add-recipe-page-info-main-structure-ingridient-item__delete'>Удалить</button>
                                        </div>   
                                    )}
                                </div>
                            </div> */}
                            <div className='add-recipe-page-info-main-steps'>
                                <p className='add-recipe-page-info-main__title'>Шаги готовки:</p>
                                <button onClick={addSteps} className='add-recipe-page-info-main-steps__button'>Добавить шаг</button>
                                <div className='add-recipe-page-info-main-steps-step'>
                                    {steps.map(step => 
                                        <div key={step.number} className='add-recipe-page-info-main-steps-step-item'>
                                            {/* <input type='file' onChange={(e) => changeSteps(e.target.files[0], step.number, recipeId, step.steps)}></input> */}
                                            <textarea value={step.steps} onChange={(e) => changeSteps(step.img, step.number, recipeId, e.target.value)} placeholder='Введите описание шага'></textarea>
                                            <button onClick={() => removeStep(step.number)} className='add-recipe-page-info-main-steps-step-item__delete'>Удалить</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button onClick={addInfoRecipe} className='add-recipe-page-info-main__button'>Создать</button>
                        </div>
                        <div className='add-recipe-page-info-instruction'>
                            <p className='add-recipe-page-info-instruction__title'>Инструкция</p>
                            <p className='add-recipe-page-info-instruction__item'>1. Укажите название</p>
                            <p className='add-recipe-page-info-instruction__item'>2. Выберете изображение</p>
                            <p className='add-recipe-page-info-instruction__item'>3. Добавте описание</p>
                            <p className='add-recipe-page-info-instruction__item'>4. Нажмите кнопку "Добавить рецепт"</p>
                            <p className='add-recipe-page-info-instruction__item'>5. Укажите дополнительную информацию"</p>
                            <p className='add-recipe-page-info-instruction__item'>6. Добавте шаги готовки</p>
                            <p className='add-recipe-page-info-instruction__item'>7. Нажмите кнопку "Создать"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AddVideoRecipePage;