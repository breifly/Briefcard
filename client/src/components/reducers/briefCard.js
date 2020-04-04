import {
  GET_ALL_BRIEFCARD,
  GET_BRIEFCARD,
  ERROR_BRIEFCARD
} from '../actions/types';
const INITIAL_STATE = {
  briefCards: '',
  briefCardContent: '',
  errorBriefcard: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_BRIEFCARD:
      return { ...state, briefCards: action.payload || false };
    case GET_BRIEFCARD:
      return { ...state, briefCardContent: action.payload || false };
    case ERROR_BRIEFCARD:
      return { ...state, errorBriefcard: action.payload };
    default:
      return state;
  }
}
