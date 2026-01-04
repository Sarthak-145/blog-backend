import API from './axios';

const login = (data) => API.post('/auth/login', data);
const register = (data) => API.post('/auth/register', data);
const me = () => API.get('/auth/me');

//logout, isLoggedin, getToken
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const isLoggedin = () => {
  return !!localStorage.getItem('token');
};

const getToken = () => {
  return localStorage.getItem('token');
};

const getUser = () => {
  return localStorage.getItem('user');
};

export { login, register, logout, isLoggedin, getToken, getUser, me };
