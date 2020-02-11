import { CREATE_MESSAGE, MESSAGE_ERROR, GET_MESSAGE } from '../actions/types';
const INITIAL_STATE = {
  messageCreate: '',
  errorMessage: '',
  allMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { ...state, createMessage: action.payload || false };
    case GET_MESSAGE:
      return { ...state, allMessage: action.payload || false };
    case MESSAGE_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
