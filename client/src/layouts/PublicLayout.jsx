import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const PublicLayout = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  if (user) return <Navigate to={'/home'} replace />;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
