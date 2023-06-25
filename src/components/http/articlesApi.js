import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createArticles= async (formData) => {
    const {data} = await $authHost.post('api/news-articles/addArticles', formData);
    return data;
}

export const getArticles = async () => {
    const {data} = await $host.get('api/news-articles/getArticles');
    return data;
}

export const getOneArticles = async (title) => {
    const {data} = await $host.get('api/news-articles/getOneArticles/' + title);
    return data;
}


export const deleteArticles = async (title) => {
    const {data} = await $authHost.delete('api/news-articles/deleteArticles/' + title);
    return data;
}