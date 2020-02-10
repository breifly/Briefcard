import { CREATE_CHAT, ERROR_CHAT } from '../actions/types';
const INITIAL_STATE = {
  chats: '',
  errorChat: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_CHAT:
      return { ...state, chats: action.payload || false };
    case ERROR_CHAT:
      return { ...state, errorChat: action.payload };

    default:
      return state;
  }
}
