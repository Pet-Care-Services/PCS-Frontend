import { useMemo } from 'react';
import { filter, map } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountIconSrc from 'assets/icons/account.png';
import AddIconSrc from 'assets/icons/add.png';
import RequestIconSrc from 'assets/icons/request.png';
import ServiceIconSrc from 'assets/icons/service.png';
import useChat from './useChat';
import useUserData from './useUserData';

const useMenuItems = () => {
  const navigate = useNavigate();
  const { userId, isLoggedIn } = useUserData();
  const { openChat } = useChat();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const items = useMemo(
    () => [
      {
        id: 0,
        title: t('services'),
        iconSrc: ServiceIconSrc,
        onClick: () => navigate('/application/services'),
        activeUrl: '/application/services',
        isLoginRequired: false,
      },
      {
        id: 1,
        title: t('requests'),
        iconSrc: RequestIconSrc,
        onClick: () => navigate('/application/requests'),
        activeUrl: '/application/requests',
        isLoginRequired: false,
      },
      {
        id: 3,
        title: t('newAdvertisement'),
        iconSrc: AddIconSrc,
        onClick: () => navigate('/application/creator'),
        activeUrl: '/application/creator',
        isLoginRequired: true,
      },
      {
        id: 4,
        title: t('account'),
        iconSrc: AccountIconSrc,
        onClick: () => navigate(`/application/account/${userId}`),
        activeUrl: `/application/account/${userId}`,
        isLoginRequired: true,
      },
      {
        id: 5,
        title: t('chat'),
        iconSrc: AccountIconSrc,
        onClick: openChat,
        activeUrl: null,
        isLoginRequired: true,
      },
    ],
    [userId]
  );

  const visibleItems = useMemo(
    () => filter(items, (item) => !item.isLoginRequired || isLoggedIn),
    [isLoggedIn, items]
  );

  const decoratedVisibleItems = useMemo(
    () =>
      map(visibleItems, (item) => ({
        ...item,
        isActive: pathname.startsWith(item.activeUrl),
      })),
    [pathname, visibleItems]
  );

  return decoratedVisibleItems;
};

export default useMenuItems;
