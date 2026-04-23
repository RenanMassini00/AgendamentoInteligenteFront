export const ROUTE_PATHS = {
  root: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',

  dashboard: '/dashboard',

  appointments: '/appointments',
  appointmentCreate: '/appointments/new',
  appointmentDetails: '/appointments/:id',
  appointmentEdit: '/appointments/:id/edit',

  clients: '/clients',
  clientCreate: '/clients/new',
  clientDetails: '/clients/:id',
  clientEdit: '/clients/:id/edit',

  services: '/services',
  serviceCreate: '/services/new',
  serviceDetails: '/services/:id',
  serviceEdit: '/services/:id/edit',

  availability: '/availability',
  availabilityManage: '/availability/manage',

  profile: '/profile',
  settings: '/settings',
} as const;