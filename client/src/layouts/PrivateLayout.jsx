import { Navigate, Outlet, replace } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';

export const PrivateLayout = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  if (!user) return <Navigate to={'/login'} replace />;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
