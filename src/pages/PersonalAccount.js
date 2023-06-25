import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import jwtDecode from 'jwt-decode';
import RecipeDefault from '../components/recipe card/default card/RecipeDefault';
import { getFavorites } from '../components/http/favoritesApi';

import accauntImg1 from '../images/accauntImg1.jpg';
import accauntImg2 from '../images/accauntImg2.jpg';
import accauntImg3 from '../images/accauntImg3.jpg';
import defaultAvatar from '../images/DefaultAvatar.png';
import { getRecipeById } from '../components/http/recipeApi';


const PersonalAccaunt = observer(() => {
    const currentUser = jwtDecode(localStorage.getItem('token'));
    const [favorites, setFavorites] = useState([]);
    const [recipesId, setRecipesId] = useState([]);

    useEffect(() => {
        getFavorites(currentUser.id).then(data => setRecipesId(data));
    }, []);

    useEffect(() => {
        if (recipesId.length !== 0) {
          const fetchFavorites = async () => {
            const fetchPromises = recipesId.map(data => getRecipeById(data.recipe_id));
            const fetchedData = await Promise.all(fetchPromises);
            const newFavorites = fetchedData.map(data => data[0]);
            
            setFavorites([...favorites, ...newFavorites]);
        };
      
          fetchFavorites();
        }
      }, [recipesId]);

    if(favorites.length !== 0) {
        console.log(favorites)
    }

    const randomImg = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber == 0) {
            return accauntImg1;
        } else if (randomNumber == 1) {
            return accauntImg2;
        } else {
            return accauntImg3;
        }
    }

    return (
        <div className='personal-page'>
            <div className='container'>
                <div className='accaunt-content'>
                    <img src={randomImg()} className='accaunt-content__img' alt='Картинка'></img>
                    <div className='accaunt-content-info'>
                        <img src={defaultAvatar} alt='Аватар пользователя' className='accaunt-content-info__avatar'></img>
                        <p className='accaunt-content-info__name'>{currentUser.name}</p>
                    </div>
                    <div className='accaunt-content-favorites'>
                        <p className='accaunt-content-favorites__title'>
                            Избранные рецепты:
                        </p>
                        <div className='accaunt-content-favorites-list'>
                            {
                                favorites.length !== 0 ? favorites.map(recipe =>
                                    <RecipeDefault key={recipe.id} recipe={recipe} />
                                )
                            : 
                                'Нет избранных'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PersonalAccaunt;