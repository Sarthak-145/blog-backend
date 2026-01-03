//this will be wrapper around the whole app, every auth thing will pass through this

import * as authServices from '../services/auth.service';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authServices.isLoggedin()) {
      setUser({});
    }
    setLoading(false);
  }, []);

  //login is broken but Login.jsx is overriding for now.
  const login = async (data) => {
    const res = await authServices.login(data);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    setUser({});
    return res;
  };

  const register = async (data) => {
    const res = await authServices.register(data);
    setUser({});
    return res;
  };

  const logout = () => {
    authServices.logout();
    setUser(null);
  };

  //still register remaining but include after updating services.auth.js

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
