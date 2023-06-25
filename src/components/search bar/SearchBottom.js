import React, { useContext, useState } from 'react';
import imgSearch from '../../images/search.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { ARTICLESPAGE_ROUTE, ARTICLES_ROUT, NEWSPAGE_ROUTE, NEWS_ROUTE, RECIPEPAGE_ROUTE, RECIPES_ROUTE, TVSHOWPAGE_ROUTE, TVSHOW_ROUTE, VIDEORECIPEPAGE_ROUTE, VIDEORECIPES_ROUTE } from '../../utils/consts';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const SearchBottom = observer(({ onSortChange }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {recipes, articles, news, tvShow} = useContext(Context);
    const [articlesTitle, setArticlesTitle] = useState('');
    const [recipeTitle, setRecipeTitle] = useState('');
    const [videoRecipeTitle, setVideoRecipeTitle] = useState('');
    const [newsTitle, setNewsTitle] = useState('');
    const [tvShowTitle, setTvShowTitle] = useState('');

    return (
        <div className='search-bottom'>
            <div className='container'>
                <div className='search-bottom-content'>
                    <p className='search-bottom-content__found'>Найдеты: 
                        {location.pathname == RECIPES_ROUTE ? ' ' + recipes.recipes.length + ' рецептов' : ''}
                        {location.pathname == VIDEORECIPES_ROUTE ? ' ' + recipes.videoRecipes.length + ' рецептов' : ''}
                        {location.pathname == ARTICLES_ROUT ? ' ' + articles.articles.length + ' статей' : ''}
                        {location.pathname == NEWS_ROUTE ? ' ' + news.news.length + ' новостей' : ''}
                        {location.pathname == TVSHOW_ROUTE ? ' ' + tvShow.tvShow.length + ' передач' : ''}
                    </p>
                    <div className='search-bottom-content__search'>
                        {location.pathname == ARTICLES_ROUT ? <img src={imgSearch} className='search-bottom-content__img' onClick={() => navigate(ARTICLESPAGE_ROUTE + '/' + articlesTitle)} alt='Поиск'></img> : ''}
                        {location.pathname == RECIPES_ROUTE ? <img src={imgSearch} className='search-bottom-content__img' onClick={() => navigate(RECIPEPAGE_ROUTE + '/' + recipeTitle)} alt='Поиск'></img> : ''}
                        {location.pathname == VIDEORECIPES_ROUTE ? <img src={imgSearch} className='search-bottom-content__img' onClick={() => navigate(VIDEORECIPEPAGE_ROUTE + '/' + videoRecipeTitle)} alt='Поиск'></img> : ''}
                        {location.pathname == NEWS_ROUTE ? <img src={imgSearch} className='search-bottom-content__img' onClick={() => navigate(NEWSPAGE_ROUTE + '/' + newsTitle)} alt='Поиск'></img> : ''}
                        {location.pathname == TVSHOW_ROUTE ? <img src={imgSearch} className='search-bottom-content__img' onClick={() => navigate(TVSHOWPAGE_ROUTE + '/' + tvShowTitle)} alt='Поиск'></img> : ''}
                        {location.pathname == ARTICLES_ROUT ? <input type='text' placeholder='Поиск по названию...' value={articlesTitle} onChange={e => setArticlesTitle(e.target.value)} className='search-bottom-content__input'></input> : ''}
                        {location.pathname == RECIPES_ROUTE ? <input type='text' placeholder='Поиск по названию...' value={recipeTitle} onChange={e => setRecipeTitle(e.target.value)} className='search-bottom-content__input'></input> : ''}
                        {location.pathname == VIDEORECIPES_ROUTE ? <input type='text' placeholder='Поиск по названию...' value={videoRecipeTitle} onChange={e => setVideoRecipeTitle(e.target.value)} className='search-bottom-content__input'></input> : ''}
                        {location.pathname == NEWS_ROUTE ? <input type='text' placeholder='Поиск по названию...' value={newsTitle} onChange={e => setNewsTitle(e.target.value)} className='search-bottom-content__input'></input> : ''}
                        {location.pathname == TVSHOW_ROUTE ? <input type='text' placeholder='Поиск по названию...' value={tvShowTitle} onChange={e => setTvShowTitle(e.target.value)} className='search-bottom-content__input'></input> : ''}
                    </div>
                    <p className='search-bottom-content__sort'>Сортировать: <select onChange={e => onSortChange(e.target.value)}><option value='newest'>Старые</option><option value='oldest'>Новые</option></select></p>
                </div>
            </div>
        </div>
    );
});

export default SearchBottom;