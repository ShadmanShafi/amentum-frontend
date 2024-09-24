import type { RouterPathType } from '@/typings/constant';

export const ROUTER_PATHS: Record<string, RouterPathType> = {
  REGISTRATION: {
    ID: '/registration',
    PATH: '/registration',
    LABEL: 'Registration',
  },

  HOME: {
    ID: '/',
    PATH: '/',
    LABEL: 'Dashboard',
  },

  APPROVE: {
    ID: '/approve',
    PATH: '/approve',
    LABEL: 'Approve',
  },

  FEEDBACKS: {
    ID: '/feedbacks',
    PATH: '/feedbacks',
    LABEL: 'Feedbacks',
  },
} as const;
