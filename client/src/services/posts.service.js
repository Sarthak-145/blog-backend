import API from './axios';

export const createPost = (data) => API.post('/posts', data);
export const getPosts = () => API.get('/posts');
export const getPostsMe = () => API.get('/posts/me');
