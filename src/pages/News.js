import React, { useContext, useEffect, useState } from 'react';
import SearchTop from '../components/search bar/SearchTop';
import SearchBottom from '../components/search bar/SearchBottom';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import RecipeAside from '../components/aside bar/RecipeAside';
import RecipeSpecial from '../components/recipe card/special card/RecipeSpecial';
import RecipeDefault from '../components/recipe card/default card/RecipeDefault';
import { getRecipes } from '../components/http/recipeApi';
import { getNews } from '../components/http/newsApi';
import NewsDefault from '../components/recipe card/default card/NewsDefault';
import NewsSpecial from '../components/recipe card/special card/NewsSpecial';
import Calendar from '../components/Calendar';

const Recipes = observer(() => {
    const {news} = useContext(Context);
    const [sortValue, setSortValue] = useState('');
    let sortedRecipes = news.news.slice();

    useEffect(() => {
        getNews().then(data => news.setNews(data.results));
    }, []);

    if (!news.news) {
        return <p>Loading</p>
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
                                <NewsSpecial news={sortedRecipes[0]}/>
                            ) : (
                                <p>Loading...</p>
                            )}
                            {sortedRecipes && sortedRecipes.length > 0 ? (
                                <NewsDefault news={sortedRecipes[1]} />
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className='recipes-page-content-main-default'>
                            {sortedRecipes ? (
                                sortedRecipes.slice(2).map(news => 
                                <div className='recipes-page-content-main-default2' key={news.id}><NewsDefault news={news}/></div>
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