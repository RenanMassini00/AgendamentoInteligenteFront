import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private-route';
import { PublicRoute } from './public-route';
import { ROUTE_PATHS } from './route-paths';

import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';
import ForgotPasswordPage from '../pages/auth/forgot-password';

import DashboardPage from '../pages/dashboard';

import AppointmentsListPage from '../pages/appointments/list';
import AppointmentsCreatePage from '../pages/appointments/create';
import AppointmentDetailsPage from '../pages/appointments/details';
import AppointmentEditPage from '../pages/appointments/edit';

import ClientsListPage from '../pages/clients/list';
import ClientsCreatePage from '../pages/clients/create';
import ClientDetailsPage from '../pages/clients/details';
import ClientEditPage from '../pages/clients/edit';

import ServicesListPage from '../pages/services/list';
import ServicesCreatePage from '../pages/services/create';
import ServiceDetailsPage from '../pages/services/details';
import ServiceEditPage from '../pages/services/edit';

import AvailabilityPage from '../pages/availability/list';
import AvailabilityManagePage from '../pages/availability/manage';

import ProfilePage from '../pages/profile';
import SettingsPage from '../pages/settings';
import NotFoundPage from '../pages/not-found';

import AppLayout from '../components/layout/app-layout';
import AuthLayout from '../components/layout/auth-layout';

export default function AppRoutes() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<AuthLayout />}>
            <Route path={ROUTE_PATHS.login} element={<LoginPage />} />
            <Route path={ROUTE_PATHS.register} element={<RegisterPage />} />
            <Route path={ROUTE_PATHS.forgotPassword} element={<ForgotPasswordPage />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route element={<AppLayout />}>
            <Route path={ROUTE_PATHS.dashboard} element={<DashboardPage />} />

            <Route path={ROUTE_PATHS.appointments} element={<AppointmentsListPage />} />
            <Route path={ROUTE_PATHS.appointmentCreate} element={<AppointmentsCreatePage />} />
            <Route path={ROUTE_PATHS.appointmentDetails} element={<AppointmentDetailsPage />} />
            <Route path={ROUTE_PATHS.appointmentEdit} element={<AppointmentEditPage />} />

            <Route path={ROUTE_PATHS.clients} element={<ClientsListPage />} />
            <Route path={ROUTE_PATHS.clientCreate} element={<ClientsCreatePage />} />
            <Route path={ROUTE_PATHS.clientDetails} element={<ClientDetailsPage />} />
            <Route path={ROUTE_PATHS.clientEdit} element={<ClientEditPage />} />

            <Route path={ROUTE_PATHS.services} element={<ServicesListPage />} />
            <Route path={ROUTE_PATHS.serviceCreate} element={<ServicesCreatePage />} />
            <Route path={ROUTE_PATHS.serviceDetails} element={<ServiceDetailsPage />} />
            <Route path={ROUTE_PATHS.serviceEdit} element={<ServiceEditPage />} />

            <Route path={ROUTE_PATHS.availability} element={<AvailabilityPage />} />
            <Route path={ROUTE_PATHS.availabilityManage} element={<AvailabilityManagePage />} />

            <Route path={ROUTE_PATHS.profile} element={<ProfilePage />} />
            <Route path={ROUTE_PATHS.settings} element={<SettingsPage />} />
          </Route>
        </Route>

        <Route path={ROUTE_PATHS.root} element={<Navigate to={ROUTE_PATHS.dashboard} replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}