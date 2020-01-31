import { GET_ALL_USERS, GET_ALL_USERS_ERROR } from '../actions/types';
const INITIAL_STATE = {
  allUsers: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: action.payload || false };
    case GET_ALL_USERS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
