import React, { useContext, useEffect, useState } from 'react';
import SearchTop from '../components/search bar/SearchTop';
import SearchBottom from '../components/search bar/SearchBottom';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import RecipeAside from '../components/aside bar/RecipeAside';
import RecipeSpecial from '../components/recipe card/special card/RecipeSpecial';
import RecipeDefault from '../components/recipe card/default card/RecipeDefault';
import { getRecipes } from '../components/http/recipeApi';
import { getShows } from '../components/http/tvShowApi';
import TvShowDefault from '../components/recipe card/default card/TvShowDefault';
import TvShowSpecial from '../components/recipe card/special card/TvShowSpecial';
import Calendar from '../components/Calendar';

const Recipes = observer(() => {
    const {tvShow} = useContext(Context);
    const [sortValue, setSortValue] = useState('');
    let sortedRecipes = tvShow.tvShow.slice();

    useEffect(() => {
        getShows().then(data => tvShow.setTvShow(data.results));
    }, []);

    if (!tvShow.tvShow) {
        return <p>Loading...</p>
    }

    if (sortValue === 'oldest') {
        sortedRecipes = sortedRecipes.reverse(); 
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
                                <TvShowSpecial tvShow={sortedRecipes[0]}/>
                            ) : (
                                <p>Loading...</p>
                            )}
                            {sortedRecipes && sortedRecipes.length > 0 ? (
                                <TvShowDefault tvShow={sortedRecipes[1]} />
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className='recipes-page-content-main-default'>
                            {sortedRecipes ? (
                                sortedRecipes.slice(2).map(tvShow => 
                                <div className='recipes-page-content-main-default2' key={tvShow.id}><TvShowDefault tvShow={tvShow}/></div>
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