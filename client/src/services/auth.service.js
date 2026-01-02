import API from './axios';

const login = (data) => API.post('/auth/login', data);
const register = (data) => API.post('/auth/register', data);

//logout, isLoggedin, getToken
const logout = () => {
  localStorage.removeItem('token');
};

const isLoggedin = () => {
  return !!localStorage.getItem('token');
};

const getToken = () => {
  return localStorage.getItem('token');
};

export { login, register, logout, isLoggedin, getToken };
