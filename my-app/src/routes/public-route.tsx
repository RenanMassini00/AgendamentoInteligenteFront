import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_PATHS } from './route-paths';

type PublicRouteProps = {
  isAuthenticated: boolean;
};

export function PublicRoute({ isAuthenticated }: PublicRouteProps) {
  if (isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.dashboard} replace />;
  }

  return <Outlet />;
}