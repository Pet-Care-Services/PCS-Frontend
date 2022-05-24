import HelpIcon from '@mui/icons-material/Help';

const getSidebarItems = (navigate) => [
  {
    id: 0,
    titleKey: 'services',
    Icon: HelpIcon,
    onClick: () => navigate('/application/services'),
  },
  {
    id: 1,
    titleKey: 'requests',
    Icon: HelpIcon,
    onClick: () => navigate('/application/requests'),
  },
  {
    id: 2,
    titleKey: 'history',
    Icon: HelpIcon,
    onClick: () => navigate('/history'),
  },
  {
    id: 3,
    titleKey: 'newAdvertisement',
    Icon: HelpIcon,
    onClick: () => navigate('/newAdvertisement'),
  },
  {
    id: 4,
    titleKey: 'account',
    Icon: HelpIcon,
    onClick: () => navigate('/account'),
  },
];

export { getSidebarItems };
