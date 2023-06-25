import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createShow = async (formData) => {
    const {data} = await $authHost.post('api/tv-show/addShow', formData);
    return data;
}

export const getShows = async () => {
    const {data} = await $host.get('api/tv-show/getShows');
    return data;
}

export const getOneShow = async (title) => {
    const {data} = await $host.get('api/tv-show/getOneShow/' + title);
    return data;
}

export const deleteShow = async (title) => {
    const {data} = await $authHost.delete('api/news-articles/deleteArticles/' + title);
    return data;
}