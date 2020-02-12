import {
  CREATE_CHAT,
  ERROR_CHAT,
  GET_CHATROOM,
  CHATROOM_ERROR,
  SENDER_ERROR,
  GET_SENDER,
  RECEIVER_ERROR,
  GET_RECEIVER,
  GET_ALL_CHAT_BY_USER,
  ERROR_ALL_CHAT_BY_USER
} from '../actions/types';
const INITIAL_STATE = {
  chats: '',
  errorChat: '',
  chatroom: '',
  sender: '',
  receiver: '',
  errorSender: '',
  errorReceiver: '',
  allChatByUser: '',
  errorAllChatByUser: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_CHAT:
      return { ...state, chats: action.payload || false };
    case ERROR_CHAT || CHATROOM_ERROR:
      return { ...state, errorChat: action.payload };
    case GET_CHATROOM:
      return { ...state, chatroom: action.payload || false };
    case GET_SENDER:
      return { ...state, sender: action.payload || false };
    case GET_RECEIVER:
      return { ...state, receiver: action.payload || false };
    case SENDER_ERROR:
      return { ...state, errorChat: action.payload };
    case RECEIVER_ERROR:
      return { ...state, errorReceiver: action.payload };
    case GET_ALL_CHAT_BY_USER:
      return { ...state, allChatByUser: action.payload };
    case ERROR_ALL_CHAT_BY_USER:
      return { ...state, errorAllChatByUser: action.payload };
    default:
      return state;
  }
}
