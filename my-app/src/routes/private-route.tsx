import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_PATHS } from './route-paths';

type PrivateRouteProps = {
  isAuthenticated: boolean;
};

export function PrivateRoute({ isAuthenticated }: PrivateRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.login} replace />;
  }

  return <Outlet />;
}