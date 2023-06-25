import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createMainInfo = async (recipeId, kitchen, categories, time_of_day, holiday) => {
    // console.log(recipeId)
    // console.log(kitchen)
    // console.log(categories)
    // console.log(time_of_day)
    // console.log(holiday)
    const {data} = await $authHost.post('api/recipe-info/postMainInfo', {recipeId, kitchen, categories, time_of_day, holiday});
    return data;
}

export const createFastInfo = async (recipeId, recipeFor, preparation, cookingTime) => {
    const {data} = await $authHost.post('api/recipe-info/postFastInfo', {recipeId, recipeFor, preparation, cookingTime});
    return data;
}

export const createProducts = async (name) => {
    const {data} = await $authHost.post('api/recipe-info/postProducts', {name});
    return data;
}

export const createStructure = async (recipeId, productsId, value) => {
    const {data} = await $authHost.post('api/recipe-info/postStructure', {recipeId, productsId, value});
    return data;
}

export const createSteps = async (recipeId, img, steps) => {
    const {data} = await $authHost.post('api/recipe-info/postSteps', {recipeId, img, steps});
    return data;
}

export const getMainInfo = async (recipeId) => {
    const {data} = await $host.get('api/recipe-info/getMainInfo', {params: { recipeId } });
    return data;
}

export const getFastInfo = async (recipeId) => {
    const {data} = await $host.get('api/recipe-info/getFastInfo', {params:  { recipeId } });
    return data;
}

export const getProducts = async (productsId) => {
    const {data} = await $host.get('api/recipe-info/getProducts', {params: { productsId } });
    return data;
}

export const getStructure = async (recipeId) => {
    const {data} = await $host.get('api/recipe-info/getStructure', {params: { recipeId } });
    return data;
}

export const getSteps = async (recipeId) => {
    const {data} = await $host.get('api/recipe-info/getSteps', {params: {recipeId}});
    return data;
}