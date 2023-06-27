import { $authHost, $host, $serverHost } from ".";
import jwt_decode from "jwt-decode";

export const createNews = async (formData) => {
    const {data} = await $serverHost.post('api/news-articles/addNews', formData);
    return data;
}

export const getNews = async () => {
    const {data} = await $serverHost.get('api/news-articles/getNews');
    return data;
}

export const getOneNews = async (title) => {
    const {data} = await $serverHost.get('api/news-articles/getOneNews/' + title);
    return data;
}

export const deleteNews = async (title) => {
    const {data} = await $serverHost.delete('api/news-articles/deleteNews/' + title);
    return data;
}