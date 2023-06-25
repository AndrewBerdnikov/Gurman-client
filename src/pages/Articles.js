import React, { useContext, useEffect, useState } from 'react';
import SearchTop from '../components/search bar/SearchTop';
import SearchBottom from '../components/search bar/SearchBottom';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import RecipeAside from '../components/aside bar/RecipeAside';
import RecipeSpecial from '../components/recipe card/special card/RecipeSpecial';
import RecipeDefault from '../components/recipe card/default card/RecipeDefault';
import { getRecipes } from '../components/http/recipeApi';
import { getArticles } from '../components/http/articlesApi';
import ArticlesDefault from '../components/recipe card/default card/ArticlesDefault';
import ArticleSpecial from '../components/recipe card/special card/ArticlesSpecial';
import Calendar from '../components/Calendar';

const Recipes = observer(() => {
    const {articles} = useContext(Context);
    const [sortValue, setSortValue] = useState('');
    let sortedRecipes = articles.articles.slice();

    useEffect(() => {
        getArticles().then(data => articles.setArticles(data.results));
    }, []);


    if (!articles.articles) {
        return <p>Loadig...</p>
    }

    if (sortValue === 'oldest') {
        sortedRecipes = sortedRecipes.reverse(); // Переворачиваем массив для старых рецептов
    }

    return (
        <div className='recipes-page'>
            <div className='container'>
                <SearchTop />
                <SearchBottom onSortChange={setSortValue}/>
                <div className='recipes-page-content'>
                    <div className='recipes-page-content-aside-calendar'>
                        <p className='aside-calendar__title'>Календарь</p>
                        <Calendar />
                    </div>
                    <div className='recipes-page-content-main'>
                        <div className='recipes-page-content-main-special'>
                            {sortedRecipes && sortedRecipes.length > 0 ? (
                                <ArticleSpecial article={sortedRecipes[0]}/>
                            ) : (
                                <p>Loading...</p>
                            )} 
                            {sortedRecipes && sortedRecipes.length > 0 ? (
                                <ArticlesDefault article={sortedRecipes[1]} />
                            ) : (
                                <p>Loading...</p>
                            )}
                            {/* {articles.articles && articles.articles.length > 0 ? (
                                <ArticleSpecial article={articles.articles[0]}/>
                            ) : (
                                <p>Loading...</p>
                            )} 
                            {articles.articles && articles.articles.length > 0 ? (
                                <ArticlesDefault article={articles.articles[1]} />
                            ) : (
                                <p>Loading...</p>
                            )}  */}
                        </div>
                        <div className='recipes-page-content-main-default'>
                            {sortedRecipes ? (
                                sortedRecipes.slice(2).map(article => 
                                <div className='recipes-page-content-main-default2' key={article.id}><ArticlesDefault article={article}/></div>
                            )
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Recipes;