import React, { useEffect, useState } from 'react';
import RecipeAside from '../../components/aside bar/RecipeAside';
import SearchTop from '../../components/search bar/SearchTop';
import { useParams } from 'react-router-dom';
import { getRecipeByTitle } from '../../components/http/recipeApi';
import { observer } from 'mobx-react-lite';
import RecipeNormalAside from '../../components/aside bar/RecipeNormalAside';
import jwt from 'jwt-decode';
import { saveAs } from 'file-saver';
import * as Docxtemplater from 'docxtemplater';
import JSZip from 'jszip';

import defaultImg from '../../images/DefaultAvatar.png';

import imgPreparation from '../../images/Kolokol.png';
import imgTime from '../../images/Clock.png';
import imgPersons from '../../images/Persons.png';
import { createMainInfo, getFastInfo, getMainInfo, getProducts, getSteps, getStructure } from '../../components/http/recipeInfoApi';
import { createComment, createRaiting, getComments, getRaiting } from '../../components/http/raitingCommentsApi';
import { getUserById } from '../../components/http/userApi';
import Comment from '../../components/Comment';
import { createFavorites } from '../../components/http/favoritesApi';
import Calendar from '../../components/Calendar';


const RecipePage = observer(() => {
    const [recipe, setRecipe] = useState({});
    const { title } = useParams();
    const [structure, setStructure] = useState([]);
    const [products, setProducts] = useState([]);
    const [comments, setComments] = useState([]);
    const [oneComment, setOneComment] = useState('')
    const [creator, setCreator] = useState({});
    const [commentators, setCommentators] = useState([]);
    const [fastInfo, setFastInfo] = useState({});
    const [tags, setTags] = useState([]);
    const [steps, setSteps] = useState([]);
    const [raiting, setRaiting] = useState('');
    const [oneRaiting, setOneRaiting] = useState('');
    const currentUser = jwt(localStorage.getItem('token'));

    useEffect(() => {
        getRecipeByTitle(title).then(data => setRecipe(data[0]));
    }, [title]);

    useEffect(() => {
        if (recipe && recipe.id) {
            getStructure(recipe.id).then(data => setStructure(data));
            getComments(recipe.id).then(data => setComments(data));
            getUserById(recipe.user_id).then(data => setCreator(data[0]));
            getFastInfo(recipe.id).then(data => setFastInfo(data[0]));
            getMainInfo(recipe.id).then(data => setTags(data[0]));
            getSteps(recipe.id).then(data => setSteps(data));
            getRaiting(recipe.id).then(data => setRaiting(data));
        }
    }, [recipe]);

    // useEffect(() => {
    //     structure.map(item => {
    //         getProducts(item.products_id).then(data => setProducts(data));
    //     })
    // }, [structure]);

    useEffect(() => {
        if (comments.length !== 0) {
          const fetchFavorites = async () => {
            const fetchPromises = comments.map(data => getUserById(data.user_id));
            const fetchedData = await Promise.all(fetchPromises);
            const newCommentators = fetchedData.map(data => data[0]);
            
            setCommentators([...commentators, ...newCommentators]);
        };
      
          fetchFavorites();
        }
    }, [comments]);

    // if(comments.length !== 0) {
    //     console.log(comments)
    // }

    
    useEffect(() => {
        if (structure.length !== 0) {
          const fetchFavorites = async () => {
            const fetchPromises = structure.map(data => getProducts(data.products_id));
            const fetchedData = await Promise.all(fetchPromises);
            const newProducts = fetchedData.map(data => data);
            
            setProducts([...products, ...newProducts]);
        };
      
          fetchFavorites();
        }
    }, [structure]);

    const addComment = async () => {
        console.log(currentUser.id);
        console.log(recipe.id);
        console.log(oneComment);
        createComment(currentUser.id, recipe.id, oneComment);
        setOneComment('');
    }

    const addFavorites = async () => {
        try {
            await createFavorites(currentUser.id, recipe.id);
        } catch (error) {
            alert('Уже есть в избранном')
        } 
    }

    const addRaiting = async () => {
        createRaiting(currentUser.id, recipe.id, oneRaiting);
        setOneRaiting('');
    }  

    return (
        <div className='one-recipe-page'>
            <div className='container'>
                <div className='one-recipe-page-wrapper'>
                    <SearchTop />
                    <div className='one-recipe-page-content'>
                        <div className='one-recipe-page-content-aside-calendar'>
                                <p className='aside-calendar__title'>Календарь</p>
                                <Calendar />
                        </div>
                        <div className='one-recipe-page-content-recipe'>
                            <p className='one-recipe-page-content-recipe__title'>{recipe.title}</p>
                            <img src={process.env.REACT_APP_API_URL + '/' + recipe.img} alt='Картинка рецепта' className='one-recipe-page-content-recipe__img'></img>
                            <div className='one-recipe-page-content-recipe-creator'>
                                <p className='one-recipe-page-content-recipe-creator__title'>Рецепт пользователя:</p>
                                <div className='one-recipe-page-content-recipe-creator-info'>
                                    <img src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt='Аватарка пользователя' className='one-recipe-page-content-recipe-creator__img'></img>
                                    <div className='one-recipe-page-content-recipe-creator-text'>
                                        <p className='one-recipe-page-content-recipe-creator-text__name'>
                                            {creator.name ? <span>{creator.name}</span> : <span>Loading</span>}
                                        </p>
                                        <p className='one-recipe-page-content-recipe-creator-text__date'>26.05.2023</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='one-recipe-page-content-recipe-favorites-raiting'>
                                <p className='raiting'>Рейтинг рецепта: {Math.round(raiting) || 'Нет рейтинга'}</p>
                            </div> */}
                            <div className='one-recipe-page-content-recipe-favorites'>
                                <button onClick={addFavorites} className='one-recipe-page-content-recipe-favorites__button'>Добавить в избранное</button>
                            </div>
                            <div className='one-recipe-page-content-recipe-fast-info'>
                                <div className='fast-info-unit'>
                                    <img src={imgPreparation} alt='Подготовка' className='fast-info__img'></img>
                                    <div className='fast-info-text'>
                                        <p className='fast-info-text__title'>Подготовка:</p>
                                        <p className='fast-info-text__value'>{fastInfo.preparation || '0'} мин</p>
                                    </div>
                                </div>
                                <div className='fast-info-unit'>
                                    <img src={imgTime} alt='Готовка' className='fast-info__img'></img>
                                    <div className='fast-info-text'>
                                        <p className='fast-info-text__title'>Приготовление:</p>
                                        <p className='fast-info-text__value'>{fastInfo.cooking_time} мин</p>
                                    </div>
                                </div>
                                <div className='fast-info-unit'>
                                    <img src={imgPersons} alt='Готовка' className='fast-info__img'></img>
                                    <div className='fast-info-text'>
                                        <p className='fast-info-text__title'>Рецептп на:</p>
                                        <p className='fast-info-text__value'>{fastInfo.recipe_for} персон</p>
                                    </div>
                                </div>
                            </div>
                            <div className='one-recipe-page-content-recipe-description'>
                                <p className='description__title'>Описание:</p>
                                <p className='description__value'>{recipe.description}</p>
                            </div>
                            {/* <div className='one-recipe-page-content-recipe-ingridients'>
                                <p className='ingridients__title'>Ингридиенты:</p>
                                {products.length !== 0 ? products.map(i => {
                                    return <div key={i[0].name}><span className='ingridient'>{i[0].name}</span><span className='ingridient-value'>{structure.value}</span></div>
                                })
                                :
                                'Не указаны'
                                }
                            </div> */}
                            <div className='one-recipe-page-content-recipe-tags'>
                                <p className='tags__title'>Тэги рецепта:</p>
                                {tags.length !== 0 ?
                                    <div className='tags-list'>
                                        <span className='tags-list__tag'>{tags.kitchen}</span>
                                        <span className='tags-list__tag'>{tags.categories}</span>
                                        <span className='tags-list__tag'>{tags.time_of_day}</span>
                                        <span className='tags-list__tag'>Пасха</span>
                                    </div>
                                    :
                                    'Не указаны'
                                }
                                
                                <div className='tags-list'>
                                    <span className='tags__tag'></span>
                                </div>
                            </div>
                            <div className='one-recipe-page-content-recipe-steps'>
                                <p className='steps__title'>Шаги готовки:</p>
                                <div className='steps-content'>
                                    {steps.length !== 0 ? steps.map((i, index) => {
                                        return <p key={i.id} className='steps-content__item'>{index + 1}:  {i.steps}</p>
                                    })
                                    :
                                        'Не указаны'
                                    }
                                    {/* {steps.length !== 0 ? steps.map((i, index) => { 
                                        <div key={i.id} className='steps-content-item'>
                                            <p className='steps-content-item__title'>Шаг {index}</p>
                                            <p className='steps-content-__item'>{i.steps}</p>
                                        </div>
                                    })
                                    :
                                        'Не указаны'
                                    } */}
                                </div>
                            </div>
                            {/* <div className='one-recipe-page-content-recipe-raiting'>
                                <div className='raiting-create'>
                                    <p className='raiting-create__text'>Оцените рецепт: </p>
                                    <input className='raiting-create__input' value={oneRaiting} onChange={e => setOneRaiting(e.target.value)}></input>
                                    <button onClick={() => addRaiting()}>f</button>
                                </div>
                            </div> */}
                            <div className='one-recipe-page-content-recipe-comments'>
                                <div className='comments-post'>
                                    <p className='comments-post__title'>Оставте комментарий:</p>
                                    <textarea className='comments-post__text' placeholder='Оставте комментарий...' value={oneComment} onChange={(e) => setOneComment(e.target.value)}></textarea>
                                    <div className='comments-post-buttons'>
                                        <button className='comments-post-buttons__button' onClick={addComment}>Добавить</button>
                                        <button className='comments-post-buttons__button' onClick={e => setOneComment('')}>Очистить</button>
                                    </div>
                                </div>
                                <div className='comments-get'>
                                    <p className='comments-get__title'>Комментарии:</p>
                                    {commentators.length !== 0 ? 
                                        // <Comment data={{user: commentators[0], comment: comments[0]}}/>
                                        commentators.map((i, index) => {
                                            return <Comment key={index} data={{user: commentators[index], comment: comments[index]}}/>
                                        })
                                    : 
                                    'Нет комментариев'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default RecipePage;