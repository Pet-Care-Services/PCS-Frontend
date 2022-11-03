import axios from 'axios';

const CONVERSATIONS_KEY = 'CONVERSATIONS';
const MESSAGES_KEY = 'MESSAGES';

const getConversations = () => {
  return axios.get('/conversations');
};

const getMessages = (conversationId) => {
  return axios.get('/messages', { params: { conversationId } });
};

const postMessage = (data) => {
  return axios.post('/messages', data);
};

const postOfferDecision = (data) => {
  return axios.post('/messages/decision', data);
};

export {
  getConversations,
  getMessages,
  postMessage,
  postOfferDecision,
  CONVERSATIONS_KEY,
  MESSAGES_KEY,
};
