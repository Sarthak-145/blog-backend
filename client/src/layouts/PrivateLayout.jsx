import { Navigate, Outlet, replace } from 'react-router-dom';
import * as authServices from '../services/auth.service';

export const PrivateLayout = () => {
  if (!authServices.isLoggedin()) return <Navigate to={'/login'} replace />;
  return (
    <>
      <Outlet />
    </>
  );
};
