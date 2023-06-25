import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createRaiting = async (userId, recipeId, raiting) => {
    const {data} = await $authHost.post('api/raiting-comment/addRaiting', {userId, recipeId, raiting});
    return data;
}

export const createComment = async (userId, recipeId, comment) => {
    const {data} = await $authHost.post('api/raiting-comment/addComment', {userId, recipeId, comment});
    return data;
}

export const getRaiting = async (recipeId) => {
    const {data} = await $host.get('api/raiting-comment/getRaiting', {params: { recipeId } });
    return data;
}

export const getComments = async (recipeId) => {
    const {data} = await $host.get('api/raiting-comment/getComments', {params: { recipeId } });
    return data;
}