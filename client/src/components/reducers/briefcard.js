import {
  CREATE_BRIEFCARD,
  ERROR_BRIEFCARD,
  GET_BRIEFCARD,
  GET_BRIEFCARD_BY_CHATROOM,
} from '../actions/types';
const INITIAL_STATE = {
  createBriefcard: '',
  briefcardChatroom: '',
  briefcardDetails: '',
  errorBriefcard: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_BRIEFCARD:
      return { ...state, createBriefcard: action.payload || false };
    case GET_BRIEFCARD:
      return { ...state, briefcardDetails: action.payload || false };
    case GET_BRIEFCARD_BY_CHATROOM:
      return { ...state, briefcardChatroom: action.payload || false };
    case ERROR_BRIEFCARD:
      return { ...state, errorBriefcard: action.payload };
    default:
      return state;
  }
}
