import React, { useContext, useEffect, useState } from 'react';
import Carousel from '../components/carousel/Carouserl';
import RecipeCategories from '../components/recipe card/recipe categories/RecipeCategories';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import ArticlesDefault from '../components/recipe card/default card/ArticlesDefault';
import RecipeDefault from '../components/recipe card/default card/RecipeDefault';
import NewsDefault from '../components/recipe card/default card/NewsDefault';
import TvShowDefault from '../components/recipe card/default card/TvShowDefault';
import mainInfo from '../images/mainInfo.png';
import { getRecipes } from '../components/http/recipeApi';
import { getArticles } from '../components/http/articlesApi';
import { getNews } from '../components/http/newsApi';
import { getShows } from '../components/http/tvShowApi';

const Main = observer(() => {
    const {articles} = useContext(Context);
    const {recipes} = useContext(Context);
    const {news} = useContext(Context);
    const {tvShow} = useContext(Context);

    useEffect(() => {
        getRecipes().then(data => recipes.setRecipes(data.results));
        getArticles().then(data => articles.setArticles(data.results));
        getNews().then(data => news.setNews(data.results));
        getShows().then(data => tvShow.setTvShow(data.results));
    }, []);


    return (
        <main className='main-page'>
            <Carousel />
            <div className='container'>
                <div className='theme-recipe'>
                    <p className='theme-recipe__title'>Тематические подбрки рецептов:</p>
                    <div className="theme-recipe-cards">
                        <RecipeCategories />
                    </div>
                    <div className="articles">
                        <p className="articles__title">Актуальные статьи:</p>
                        <div className="articles-recipe-cards">
                            {articles.articles.slice(0, 8).map(article => 
                                <ArticlesDefault key={article.id} article={article}/>
                            )}
                        </div>
                    </div>
                    <div className="articles">
                        <p className="articles__title">Необычные рецепты:</p>
                        <div className="articles-recipe-cards">
                            {recipes.recipes.slice(0, 8).map(recipe => 
                                <RecipeDefault key={recipe.id} recipe={recipe}/>
                            )}
                        </div>
                    </div>
                    <div className="articles">
                        <p className="articles__title">Горячие новости:</p>
                        <div className="articles-recipe-cards">
                            {news.news.slice(0, 8).map(news => 
                                <NewsDefault key={news.id} news={news}/>
                            )}
                        </div>
                    </div>
                    <div className="articles">
                        <p className="articles__title">Интересные телепередачи:</p>
                        <div className="articles-recipe-cards">
                            {tvShow.tvShow.slice(0, 8).map(tvShow => 
                                <TvShowDefault key={tvShow.id} tvShow={tvShow}/>
                            )}
                        </div>
                    </div>
                <div className="project-info">
                        <img src={mainInfo} alt="Картинка" className="project-info__img"/>
                        <div className="project-description">
                       <p className="project-description__title">Кулинарный сайт с пошаговыми рецептами с фото</p>
                       <p className="project-description__text">
                            Рецепты которой пришлись по душе российским телезрителям, готовит в своеобразном авторском стиле, которому можно при желании научиться. Если вы хотите постичь азы кулинарного искусства, смотрите телепередачи «Едим дома», запоминайте тонкости и секреты приготовления блюд и практикуйтесь на собственной кухне. Рецепты от Юлии Высоцкой отличаются простотой и доступностью продуктов, но при этом они потрясающе изысканны и оригинальны.
                       </p>
                       <p className="project-description__text">
                            Истории кулинарного искусства известны десятки тысяч блюд, но кулинарные рецепты Высоцкой вобрали в себя все самое лучше, что существует в культурах разных стран и народностей. Юлии удалось объединить культурные традиции всего мира и адаптировать их для россиян. Нет ни одного гурмана, который хотя бы раз не пытался приготовить по рецептам Ю.Высоцкой, и самое интересное — блюда получаются всегда. Даже неопытные кулинары довольны результатами, которые вдохновляют их на дальнейшие подвиги на кухне.
                        </p>
                        <p className="project-description__text">
                            Существует множество кулинарных книг, но максимальный эффект можно получить от видеоуроков или пошаговых инструкций с фотографиями. Народная мудрость гласит — лучше один раз увидеть, чем сто раз услышать.
                        </p>
                        <p className="project-description__text">
                            Читайте рецепты от Высоцкой с фото и пользуйтесь подробными пошаговыми инструкциями для того, чтобы ваша жизнь стала ярче и вкуснее!
                        </p>
                        </div>
                </div>
                </div>
            </div>
        </main>
    );
});

export default Main;