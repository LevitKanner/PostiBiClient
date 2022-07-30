import client from "./Client";

export const register = (payload) => client.post('auth/register', payload);
export const login = (payload) => client.post('auth/login', payload);
export const refresh = (payload) => client.post('auth/refresh', payload);
