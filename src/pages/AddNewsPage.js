import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import SearchTop from '../components/search bar/SearchTop';
import { Context } from '..';

import jwt from 'jwt-decode';
import { createRecipe } from '../components/http/recipeApi';
import { getRecipes } from '../components/http/recipeApi';
import { createFastInfo, createMainInfo, createSteps, createStructure } from '../components/http/recipeInfoApi';
import { createArticles } from '../components/http/articlesApi';
import { createNews } from '../components/http/newsApi';

const AddNewsPage = observer(() => {
    const {user} = useContext(Context);
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);

    const currentUser = jwt(localStorage.getItem('token'));

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addNews = async () => {
        const formData = new FormData();
        formData.append('userId', currentUser.id);
        formData.append('title', name);
        formData.append('img', file);
        formData.append('info', description);
        formData.append('news_articles', 1);
        formData.append('generatedd', formattedDate);
        await createNews(formData);
        setName('');
        setFile(null);
        setDescription('');
    }

    return (
        <div className='add-articles-page'>
            <div className='container'>
                <div className='add-articles-page-content'>
                    <SearchTop />
                    <div className='add-articles-page-info'>
                        <div className='add-articles-page-info-main'>
                            <p className='add-recipe-page-info-main__title'>Название:</p>
                            <p><input type='text' placeholder='Введите название...' value={name} onChange={(e) => setName(e.target.value)} className='add-recipe-page-info-main__name'></input></p>
                            <p className='add-recipe-page-info-main__title'>Выберете изображение:</p>
                            <div className='add-recipe-page-info-main-file'>
                                <input type='file' className='add-recipe-page-info-main-file__input' onChange={selectFile}></input>
                            </div>
                            <p className='add-recipe-page-info-main__title'>Добавте описание:</p>
                            <textarea placeholder='Добавте описание...' value={description} onChange={(e) => setDescription(e.target.value)} className='add-recipe-page-info-main__description'></textarea>
                            <button onClick={addNews} className='add-recipe-page-info-main__button'>Добавить новость</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AddNewsPage;