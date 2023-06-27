import { $authHost, $host, $serverHost } from ".";
import jwt_decode from "jwt-decode";

export const registration = async (name, email, password) => {
    const {data} = await $serverHost.post('api/user/registration', {name, password, email, role: 'ADMIN'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $serverHost.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check = async () => {
    try {
        const {data} = await $serverHost.get('api/user/auth', );
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (userId) => {
    const {data} = await $serverHost.get('api/user/getUserById', {params: { userId }});
    return data;
}