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
        if (error?.response?.status === 401) {
            // send request to get new access token
            const authTokens = {
                accessToken: localStorage.getItem('access') ,
                refreshToken: localStorage.getItem('refresh')
            }

            const tokens = await refresh(authTokens);
            client(prevRequest)
            // prevRequest.headers['Authorization'] = `Bearer ${}`
        }
        return Promise.reject(error)
    })

export default client;