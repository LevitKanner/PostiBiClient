import client from "./Client";

export const getUser = (userId) => client.get(`users/${userId}`);
export const getUsers = () => client.get(`users`);