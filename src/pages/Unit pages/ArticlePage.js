import React, { useEffect, useState } from 'react';
import RecipeAside from '../../components/aside bar/RecipeAside';
import SearchTop from '../../components/search bar/SearchTop';
import { useParams } from 'react-router-dom';
import { getRecipeByTitle } from '../../components/http/recipeApi';
import { observer } from 'mobx-react-lite';
import RecipeNormalAside from '../../components/aside bar/RecipeNormalAside';
import jwt from 'jwt-decode';

import defaultImg from '../../images/DefaultAvatar.png';

import imgPreparation from '../../images/Kolokol.png';
import imgTime from '../../images/Clock.png';
import imgPersons from '../../images/Persons.png';
import { createMainInfo, getFastInfo, getMainInfo, getProducts, getSteps, getStructure } from '../../components/http/recipeInfoApi';
import { createComment, getComments } from '../../components/http/raitingCommentsApi';
import { getUserById } from '../../components/http/userApi';
import Comment from '../../components/Comment';
import Calendar from '../../components/Calendar';
import { getOneArticles } from '../../components/http/articlesApi';


const ArticlePage = observer(() => {
    const [article, setArticle] = useState({});
    const { title } = useParams();
    const [comments, setComments] = useState([]);
    const [oneComment, setOneComment] = useState('')
    const [creator, setCreator] = useState({});
    const [commentators, setCommentators] = useState([]);

    const currentUser = jwt(localStorage.getItem('token'));

    useEffect(() => {
        getOneArticles(title).then(data => setArticle(data[0]));
    }, [title]);

    useEffect(() => {
        if (article && article.id) {
            getUserById(article.user_id).then(data => setCreator(data[0]));
        }
    }, [article]);

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
                            <p className='one-recipe-page-content-recipe__title'>{article.title}</p>
                            <img src={process.env.REACT_APP_API_URL + '/' + article.img} alt='Картинка рецепта' className='one-recipe-page-content-recipe__img'></img>
                            <div className='one-recipe-page-content-recipe-creator'>
                                <p className='one-recipe-page-content-recipe-creator__title'>Рецепт пользователя:</p>
                                <div className='one-recipe-page-content-recipe-creator-info'>
                                    <img src={creator.img ? process.env.REACT_APP_API_URL + '/' + creator.img : defaultImg} alt='Аватарка пользователя' className='one-recipe-page-content-recipe-creator__img'></img>
                                    <div className='one-recipe-page-content-recipe-creator-text'>
                                        <p className='one-recipe-page-content-recipe-creator-text__name'>
                                            {creator.name ? <span>{creator.name}</span> : <span>Loading</span>}
                                        </p>
                                        <p className='one-recipe-page-content-recipe-creator-text__date'>{article.generatedd ? article.generatedd.slice(0, 10) : ''}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='one-recipe-page-content-recipe-description'>
                                <p className='description__title'>Информация:</p>
                                <p className='description__value'>{article.info}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ArticlePage;