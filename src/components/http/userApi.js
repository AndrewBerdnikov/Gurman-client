import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async (name, email, password) => {
    const {data} = await $host.post('api/user/registration', {name, password, email, role: 'ADMIN'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth', );
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const getUserById = async (userId) => {
    const {data} = await $host.get('api/user/getUserById', {params: { userId }});
    return data;
}