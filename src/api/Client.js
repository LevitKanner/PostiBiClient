import axios from "axios";
import {refresh} from "./Auth";

const client = axios.create({
    baseUrl: process.env.REACT_APP_BASE_URL
});

client.interceptors.request.use(config => {
        config.baseURL = process.env.REACT_APP_BASE_URL
        config.headers["Authorization"] = `Bearer ${localStorage.getItem('access')}`;
        return config;
    },
    error => Promise.reject(error)
);

client.interceptors.response.use(response => response,
    async error => {
        const prevRequest = error?.config;
        console.log(error)
        if (error?.response?.status === 401 && prevRequest.url !== 'auth/login') {
            // send request to get new access token
            window.location.replace("/login")
        }
        return Promise.reject(error)
    })

export default client;