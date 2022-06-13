import HelpIcon from '@mui/icons-material/Help';

const getSidebarItems = (navigate) => [
  {
    id: 0,
    titleKey: 'services',
    Icon: HelpIcon,
    onClick: () => navigate('/application/services'),
    isLoginRequired: false,
  },
  {
    id: 1,
    titleKey: 'requests',
    Icon: HelpIcon,
    onClick: () => navigate('/application/requests'),
    isLoginRequired: false,
  },
  {
    id: 2,
    titleKey: 'history',
    Icon: HelpIcon,
    onClick: () => navigate('/application/history'),
    isLoginRequired: true,
  },
  {
    id: 3,
    titleKey: 'newAdvertisement',
    Icon: HelpIcon,
    onClick: () => navigate('/application/creator'),
    isLoginRequired: true,
  },
  {
    id: 4,
    titleKey: 'account',
    Icon: HelpIcon,
    onClick: () => navigate('/application/account'),
    isLoginRequired: true,
  },
];

export { getSidebarItems };
