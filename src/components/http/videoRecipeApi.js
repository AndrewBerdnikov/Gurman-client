import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createVideoRecipe = async (userId, title, img, video, description, generatedd) => {
    const {data} = await $authHost.post('api/video-recipe/addVideoRecipe', {userId, title, img, video, description, generatedd});
    return data;
}

// export const createRecipe = async (userId, title, img, video, description, generatedd) => {
//     const {data} = await $authHost.post('api/recipe/addRecipe', {userId, title, img, video, description, generatedd});
//     return data;
// }

export const getVideoRecipes = async (page, limit) => {
    const {data} = await $host.get('api/video-recipe/getVideoRecipes', {params: {page, limit}});
    return data;
}

export const getVideoRecipeByTitle = async (title) => {
    const {data} = await $host.get('api/video-recipe/getOneVideoRecipe/' + title);
    return data;
}

export const getVideoRecipeById = async (recipeId) => {
    const {data} = await $host.get('api/recipe/getRecipeById', {params: {recipeId}});
    return data;
}