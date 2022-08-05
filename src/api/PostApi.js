import client from "./Client";

export const getAllPosts = () => client.get("posts");
export const getUserPosts = (userId) => client.get(`posts/user-posts/${userId}`);
export const getPost = (postId) => client.get(`posts/${postId}`);
export const createPost = (payload, userId) => client.post(`posts?userId=${userId}`, payload);
export const updatePost = (payload, postId) => client.put(`posts/${postId}`, payload);
export const deletePost = (postId) => client.delete(`posts/${postId}`);
export const getFollowingPosts = (userId) => client.get(`posts/user-following/${userId}`)
