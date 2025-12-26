import API from './axios';

export const createPost = (data) => API.post('/api/posts', data);
export const getPosts = () => API.get('/api/posts');
