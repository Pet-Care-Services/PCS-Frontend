import { useContext } from 'react';
import { SidebarContext } from 'providers/Sidebar';
import { actions } from 'providers/Sidebar/reducer';

const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarContext');
  }

  const openSidebar = () => {
    context.dispatch({
      type: actions.OPEN_SIDEBAR,
    });
  };

  const closeSidebar = () => {
    context.dispatch({
      type: actions.CLOSE_SIDEBAR,
    });
  };

  return {
    isSidebarOpened: context.state.open,
    openSidebar,
    closeSidebar,
  };
};

export default useSidebar;
