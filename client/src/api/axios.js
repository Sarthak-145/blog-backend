import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: 'true',
});

API.interceptor.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.header.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
