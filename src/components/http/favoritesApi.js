import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createFavorites = async (userId, recipeId) => {
    const {data} = await $authHost.post('api/favorites/addFavorites', {userId, recipeId});
    return data;
}

export const getFavorites = async (userId) => {
    const {data} = await $authHost.get('api/favorites/getFavorites', {params: {userId}});
    return data;
}

export const deleteFavorites = async (title) => {
    const {data} = await $authHost.delete('api/favotites/deleteFavorites/' + title);
    return data;
}