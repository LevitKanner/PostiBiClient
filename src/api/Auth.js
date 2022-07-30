import client from "../Client";

export const register = (payload) => client.post('auth/register', payload);
export const login = (payload) => client.post('auth/login', payload).catch(e => {
    throw e
});
export const refresh = (payload) => client.post('auth/refresh', payload);
