import React, { useContext, useEffect, useState } from 'react';
import SearchTop from '../components/search bar/SearchTop';
import SearchBottom from '../components/search bar/SearchBottom';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import RecipeAside from '../components/aside bar/RecipeAside';
import RecipeSpecial from '../components/recipe card/special card/RecipeSpecial';
import RecipeDefault from '../components/recipe card/default card/RecipeDefault';
import { getRecipes } from '../components/http/recipeApi';
import Pagination from '../components/Pagination';
import RecipeNormalAside from '../components/aside bar/RecipeNormalAside';
import Calendar from '../components/Calendar';

const Recipes = observer(() => {
    const {recipes} = useContext(Context);
    const [sortValue, setSortValue] = useState('');
    let sortedRecipes = recipes.recipes.slice();

    useEffect(() => {
        getRecipes(recipes.page, recipes.limit).then(data => {
            recipes.setRecipes(data.results)
            recipes.setTotalCount(data.totalCount)
        });
    }, [recipes.page, recipes.limit]);

    if (!recipes.recipes) {
        return <p>Loading...</p>; 
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
                                <RecipeSpecial recipes={sortedRecipes[0]} />
                            ) : (
                                <p>Loading...</p>
                            )}
                            {console.log(sortedRecipes[1])}
                            {sortedRecipes && sortedRecipes.length > 0  ? (
                                <RecipeDefault recipe={sortedRecipes[1]}/>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className='recipes-page-content-main-default'>
                        {sortedRecipes ? (
                            sortedRecipes.slice(2).map(recipe => (
                                <div className='recipes-page-content-main-default2' key={recipe.id}>
                                    <RecipeDefault recipe={recipe} />
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Recipes;