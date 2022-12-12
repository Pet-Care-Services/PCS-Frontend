import { useContext } from 'react';
import { ChatContext } from 'providers/Chat';
import { actions } from 'providers/Chat/reducer';

const useChat = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error('useChat must be used within a ChatContext');
  }

  const openChat = (initialActiveConversationId) => {
    context.dispatch({
      type: actions.OPEN_CHAT,
      payload: {
        initialActiveConversationId,
      },
    });
  };

  const closeChat = () => {
    context.dispatch({
      type: actions.CLOSE_CHAT,
    });
  };

  return {
    isSidebarOpened: context.state.open,
    openChat,
    closeChat,
  };
};

export default useChat;
