import AccountIconSrc from 'assets/icons/account.png';
import AddIconSrc from 'assets/icons/add.png';
import HistoryIconSrc from 'assets/icons/history.png';
import RequestIconSrc from 'assets/icons/request.png';
import ServiceIconSrc from 'assets/icons/service.png';

const getSidebarItems = (navigate) => [
  {
    id: 0,
    titleKey: 'services',
    iconSrc: ServiceIconSrc,
    onClick: () => navigate('/application/services'),
    activeUrl: '/application/services',
    isLoginRequired: false,
  },
  {
    id: 1,
    titleKey: 'requests',
    iconSrc: RequestIconSrc,
    onClick: () => navigate('/application/requests'),
    activeUrl: '/application/requests',
    isLoginRequired: false,
  },
  {
    id: 2,
    titleKey: 'history',
    iconSrc: HistoryIconSrc,
    onClick: () => navigate('/application/history'),
    activeUrl: '/application/history',
    isLoginRequired: true,
  },
  {
    id: 3,
    titleKey: 'newAdvertisement',
    iconSrc: AddIconSrc,
    onClick: () => navigate('/application/creator'),
    activeUrl: '/application/creator',
    isLoginRequired: true,
  },
  {
    id: 4,
    titleKey: 'account',
    iconSrc: AccountIconSrc,
    onClick: () => navigate('/application/account'),
    activeUrl: '/application/account',
    isLoginRequired: true,
  },
];

export { getSidebarItems };
