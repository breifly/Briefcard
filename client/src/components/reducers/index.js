import { combineReducers } from 'redux';
import auth from './auth';
import discover from './discover';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: auth,
  form: formReducer,
  discover: discover
});
