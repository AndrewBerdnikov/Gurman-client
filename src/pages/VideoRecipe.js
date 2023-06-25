import React, { useContext, useEffect, useState } from 'react';
import SearchTop from '../components/search bar/SearchTop';
import SearchBottom from '../components/search bar/SearchBottom';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import RecipeAside from '../components/aside bar/RecipeAside';
import RecipeSpecial from '../components/recipe card/special card/RecipeSpecial';
import RecipeDefault from '../components/recipe card/default card/RecipeDefault';
import { getRecipes } from '../components/http/recipeApi';
import RecipeNormalAside from '../components/aside bar/RecipeNormalAside';
import { getVideoRecipes } from '../components/http/videoRecipeApi';
import VideoRecipeDefault from '../components/recipe card/default card/VideoRecipeDefault';
import VideoRecipeSpecial from '../components/recipe card/special card/VideoRecipeSpecial';
import Calendar from '../components/Calendar';

const Recipes = observer(() => {
    const {recipes} = useContext(Context);
    const [sortValue, setSortValue] = useState('');
    let sortedRecipes = recipes.videoRecipes.slice();

    useEffect(() => {
        getVideoRecipes().then(data => recipes.setVideoRecipes(data.results));
    }, []);

    if (!recipes.recipes) {
        return <p>Loading...</p>; 
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
                                <VideoRecipeSpecial recipes={sortedRecipes[0]}/>
                            ) : (
                                <p>Loading...</p>
                            )}
                            {sortedRecipes && sortedRecipes.length > 0 ? (
                                <VideoRecipeDefault recipe={sortedRecipes[1]} />
                            ) : (
                                <p>Loading...</p>
                            )}
                            {/* {recipes.videoRecipes && recipes.videoRecipes.length > 0 ? (
                                <RecipeSpecial recipes={recipes.videoRecipes[0]}/>
                            ) : (
                                <p>Loading...</p>
                            )}
                            {recipes.videoRecipes && recipes.videoRecipes.length > 0 ? (
                                <VideoRecipeDefault recipe={recipes.videoRecipes[1]} />
                            ) : (
                                <p>Loading...</p>
                            )} */}
                        </div>
                        <div className='recipes-page-content-main-default'>
                            {sortedRecipes ? (
                                sortedRecipes.slice(2).map(recipe => 
                                <div className='recipes-page-content-main-default2' key={recipe.id}><VideoRecipeDefault recipe={recipe}/></div>
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