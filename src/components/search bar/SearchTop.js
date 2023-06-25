import React, { useContext } from 'react';
import imgAddRecipe from '../../images/addRecipe.png'
import { useLocation, useParams } from 'react-router-dom';
import { ADDARTICLESPAGE_ROUTE, ADDNEWSPAGE_ROUTE, ADDRECIPE_ROUTE, ADDTVSHOWPAGE_ROUTE, ADDVIDEORECIPEPAGE_ROUTE, ARTICLES_ROUT, MAIN_ROUTE, NEWS_ROUTE, RECIPEPAGE_ROUTE, RECIPES_ROUTE, TVSHOW_ROUTE, VIDEORECIPES_ROUTE } from '../../utils/consts';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const SearchTop = observer(() => {
    const location = useLocation();
    const {user} = useContext(Context);

    return (
        <div className='search-top'>
            <div className='container'>
                <div className='search-top-content'>
                    {location.pathname == RECIPES_ROUTE ? <NavLink to={MAIN_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == ADDRECIPE_ROUTE ? <NavLink to={RECIPES_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == ADDVIDEORECIPEPAGE_ROUTE ? <NavLink to={VIDEORECIPES_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == ADDARTICLESPAGE_ROUTE ? <NavLink to={ARTICLES_ROUT}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == ADDNEWSPAGE_ROUTE ? <NavLink to={NEWS_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == ADDTVSHOWPAGE_ROUTE ? <NavLink to={TVSHOW_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'recipe-page' ? <NavLink to={RECIPES_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'articles-page' ? <NavLink to={ARTICLES_ROUT}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'news-page' ? <NavLink to={NEWS_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'tvshow-page' ? <NavLink to={TVSHOW_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == VIDEORECIPES_ROUTE ? <NavLink to={MAIN_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == ARTICLES_ROUT ? <NavLink to={MAIN_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == NEWS_ROUTE ? <NavLink to={MAIN_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    {location.pathname == TVSHOW_ROUTE ? <NavLink to={MAIN_ROUTE}><p className='search-top-content__back'>{'<'} Вернуться назад</p></NavLink> : ''}
                    <div className='search-top-content-title'>
                        <h3 className='search-top-content-title__title'>
                            {location.pathname == RECIPES_ROUTE ? 'Каталог рецептов' : ''}
                            {location.pathname == VIDEORECIPES_ROUTE ? 'Каталог видеорецептов' : ''}
                            {location.pathname == ADDRECIPE_ROUTE ? 'Добавление рецептов' : ''}
                            {location.pathname == ADDVIDEORECIPEPAGE_ROUTE ? 'Добавление Видеорецептов' : ''}
                            {location.pathname == ADDARTICLESPAGE_ROUTE ? 'Добавление Статей' : ''}
                            {location.pathname == ADDNEWSPAGE_ROUTE ? 'Добавление Новостей' : ''}
                            {location.pathname == ADDTVSHOWPAGE_ROUTE ? 'Добавление Передач' : ''}
                            {location.pathname.split('/')[1] == 'recipe-page' ? 'Рецепт' : ''}
                            {location.pathname.split('/')[1] == 'articles-page' ? 'Статья' : ''}
                            {location.pathname.split('/')[1] == 'news-page' ? 'Новость' : ''}
                            {location.pathname.split('/')[1] == 'tvshow-page' ? 'Телепередача' : ''}
                            {location.pathname == ARTICLES_ROUT ? 'Подборка статей' : ''}
                            {location.pathname == NEWS_ROUTE ? 'Свежие новости' : ''}
                            {location.pathname == TVSHOW_ROUTE ? 'Телепередачи' : ''}
                        </h3>
                        <p className='search-top-content-title__history'>
                            {location.pathname == RECIPES_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » Рецепты</span> : ''}
                            {location.pathname == ADDRECIPE_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » <NavLink to={RECIPES_ROUTE}>Рецепты</NavLink> » Добавление рецептов</span> : ''}
                            {location.pathname == ADDVIDEORECIPEPAGE_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » <NavLink to={VIDEORECIPES_ROUTE}>Видерецепты</NavLink> » Добавление Видеорецептов</span> : ''}
                            {location.pathname == ADDARTICLESPAGE_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » <NavLink to={ARTICLES_ROUT}>Статьи</NavLink> » Добавление Статей</span> : ''}
                            {location.pathname == ADDNEWSPAGE_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » <NavLink to={NEWS_ROUTE}>Новости</NavLink> » Добавление Новостей</span> : ''}
                            {location.pathname == ADDTVSHOWPAGE_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » <NavLink to={TVSHOW_ROUTE}>Телепередачи</NavLink> » Добавление Передач</span> : ''}
                            {location.pathname == VIDEORECIPES_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » Видеорецепты</span> : ''}
                            {location.pathname == ARTICLES_ROUT ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » Статьи</span> : ''}
                            {location.pathname == NEWS_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » Новости</span> : ''}
                            {location.pathname == TVSHOW_ROUTE ? <span><NavLink to={MAIN_ROUTE}>Главная</NavLink> » Телепередачи</span> : ''}
                        </p>
                    </div>
                    {location.pathname == ADDRECIPE_ROUTE ? <NavLink to={user.isAuth ? ADDRECIPE_ROUTE : RECIPES_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить рецепт</button></NavLink> : ''}
                    {location.pathname == ADDVIDEORECIPEPAGE_ROUTE ? <NavLink to={user.isAuth ? ADDVIDEORECIPEPAGE_ROUTE : RECIPES_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить видео</button></NavLink> : ''}
                    {location.pathname == ADDARTICLESPAGE_ROUTE ? <NavLink to={user.isAuth ? ADDARTICLESPAGE_ROUTE : ARTICLES_ROUT}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить статью</button></NavLink> : ''}
                    {location.pathname == ADDNEWSPAGE_ROUTE ? <NavLink to={user.isAuth ? ADDNEWSPAGE_ROUTE : NEWS_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить новость</button></NavLink> : ''}
                    {location.pathname == ADDTVSHOWPAGE_ROUTE ? <NavLink to={user.isAuth ? ADDTVSHOWPAGE_ROUTE : TVSHOW_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить передачу</button></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'recipe-page' ? <NavLink to={user.isAuth ? ADDRECIPE_ROUTE : RECIPES_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить рецепт</button></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'articles-page' ? <NavLink to={user.isAuth ? ADDARTICLESPAGE_ROUTE : ARTICLES_ROUT}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить статью</button></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'news-page' ? <NavLink to={user.isAuth ? ADDNEWSPAGE_ROUTE : NEWS_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить новость</button></NavLink> : ''}
                    {location.pathname.split('/')[1] == 'tvshow-page' ? <NavLink to={user.isAuth ? ADDNEWSPAGE_ROUTE : NEWS_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить новость</button></NavLink> : ''}
                    {location.pathname == VIDEORECIPES_ROUTE ? <NavLink to={user.isAuth ? ADDVIDEORECIPEPAGE_ROUTE : VIDEORECIPES_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить видео</button></NavLink> : ''}
                    {location.pathname == RECIPES_ROUTE ? <NavLink to={user.isAuth ? ADDRECIPE_ROUTE : RECIPES_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить рецепт</button></NavLink> : ''}
                    {location.pathname == ARTICLES_ROUT ? <NavLink to={user.isAuth ? ADDARTICLESPAGE_ROUTE : ARTICLES_ROUT}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить статью</button></NavLink> : ''}
                    {location.pathname == NEWS_ROUTE ? <NavLink to={user.isAuth ? ADDNEWSPAGE_ROUTE : NEWS_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить новость</button></NavLink> : ''}
                    {location.pathname == TVSHOW_ROUTE ? <NavLink to={user.isAuth ? ADDTVSHOWPAGE_ROUTE : TVSHOW_ROUTE}><button className='search-top-content__button'><img src={imgAddRecipe} alt='Добавить' className='search-top-content__button-img'/>Добавить передачу</button></NavLink> : ''}
                </div>
            </div>
        </div>
    );
});

export default SearchTop;