import { $authHost, $host, $serverHost } from ".";
import jwt_decode from "jwt-decode";

export const createArticles= async (formData) => {
    const {data} = await $serverHost.post('api/news-articles/addArticles', formData);
    return data;
}

export const getArticles = async () => {
    const {data} = await $serverHost.get('api/news-articles/getArticles');
    return data;
}

export const getOneArticles = async (title) => {
    const {data} = await $serverHost.get('api/news-articles/getOneArticles/' + title);
    return data;
}


export const deleteArticles = async (title) => {
    const {data} = await $serverHost.delete('api/news-articles/deleteArticles/' + title);
    return data;
}