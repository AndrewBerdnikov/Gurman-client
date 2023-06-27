import { $authHost, $host, $serverHost } from ".";
import jwt_decode from "jwt-decode";

export const createRecipe = async (formData) => {
    const {data} = await $serverHost.post('api/recipe/addRecipe', formData);
    return data;
}

// export const createRecipe = async (userId, title, img, video, description, generatedd) => {
//     const {data} = await $authHost.post('api/recipe/addRecipe', {userId, title, img, video, description, generatedd});
//     return data;
// }

export const getRecipes = async (page, limit) => {
    const {data} = await $serverHost.get('api/recipe/getRecipes', {params: {page, limit}});
    return data;
}

export const getRecipeByTitle = async (title) => {
    const {data} = await $serverHost.get('api/recipe/getOneRecipe/' + title);
    return data;
}

export const getRecipeById = async (recipeId) => {
    const {data} = await $serverHost.get('api/recipe/getRecipeById', {params: {recipeId}});
    return data;
}