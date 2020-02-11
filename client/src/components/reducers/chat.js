import {
  CREATE_CHAT,
  ERROR_CHAT,
  GET_CHATROOM,
  CHATROOM_ERROR
} from '../actions/types';
const INITIAL_STATE = {
  chats: '',
  errorChat: '',
  chatroom: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_CHAT:
      return { ...state, chats: action.payload || false };
    case ERROR_CHAT || CHATROOM_ERROR:
      return { ...state, errorChat: action.payload };
    case GET_CHATROOM:
      return { ...state, chatroom: action.payload || false };

    default:
      return state;
  }
}
