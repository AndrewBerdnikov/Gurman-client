import { $authHost, $host, $serverHost } from ".";
import jwt_decode from "jwt-decode";

export const createRaiting = async (userId, recipeId, raiting) => {
    const {data} = await $serverHost.post('api/raiting-comment/addRaiting', {userId, recipeId, raiting});
    return data;
}

export const createComment = async (userId, recipeId, comment) => {
    const {data} = await $serverHost.post('api/raiting-comment/addComment', {userId, recipeId, comment});
    return data;
}

export const getRaiting = async (recipeId) => {
    const {data} = await $serverHost.get('api/raiting-comment/getRaiting', {params: { recipeId } });
    return data;
}

export const getComments = async (recipeId) => {
    const {data} = await $serverHost.get('api/raiting-comment/getComments', {params: { recipeId } });
    return data;
}