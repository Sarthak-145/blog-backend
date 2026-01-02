//this will be wrapper around the whole app, every auth thing will pass through this

import * as authServices from '../services/auth.service';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authServices.isLoggedin()) {
      setUser({}); //hold on, will include real data once it works.
    }
    setLoading(false);
  }, []);

  //login is broken but Login.jsx is overriding for now.
  const login = async (data) => {
    const res = await authServices.login(data);
    setUser({});
    return res;
  };

  const logout = () => {
    authServices.logout();
    setUser(null);
  };

  //still register remaining but include after updating services.auth.js

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
