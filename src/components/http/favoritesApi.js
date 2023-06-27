import { $authHost, $host, $serverHost } from ".";
import jwt_decode from "jwt-decode";

export const createFavorites = async (userId, recipeId) => {
    const {data} = await $serverHost.post('api/favorites/addFavorites', {userId, recipeId});
    return data;
}

export const getFavorites = async (userId) => {
    const {data} = await $serverHost.get('api/favorites/getFavorites', {params: {userId}});
    return data;
}

export const deleteFavorites = async (title) => {
    const {data} = await $serverHost.delete('api/favotites/deleteFavorites/' + title);
    return data;
}