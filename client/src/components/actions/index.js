import keys from '../../config/keys';
import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  AUTH_ERROR_SIGNUP,
  EDIT_USER,
  GET_ALL_USERS,
  GET_ALL_USERS_ERROR,
  CREATE_DISCOVER,
  DISCOVER_ERROR,
  GET_ALL_DISCOVERS,
  GET_ALL_DISCOVERS_ERROR,
  GET_DISCOVERS,
  GET_DISCOVERS_ERROR,
  CREATE_CHAT,
  ERROR_CHAT,
  GET_CHATROOM,
  CHATROOM_ERROR,
  CREATE_MESSAGE,
  MESSAGE_ERROR,
  GET_MESSAGE
} from './types';
import * as JWT from 'jwt-decode';

///////////////////////////////// User Authentification ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Signup with Passport JWT
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${keys.siteUrl}/signup`, formProps);
    localStorage.setItem('token', response.data.token);
    // then when you have the token decode it.
    let token = localStorage.token;
    if (token) {
      // Decode token
      token = JWT(token);
      // let token to variable data
      let data = token;
      data = {
        id: data.sub,
        email: data.email
      };
      const response = await axios.get(`/api/user/${data.id}`);
      dispatch({ type: AUTH_USER, payload: response.data });
      callback(data.id); /* history callback */
    } else {
      token = null;
    }
  } catch (e) {
    dispatch({ type: AUTH_ERROR_SIGNUP, payload: 'Email in use' });
  }
};

// Signin with Passport JWT
export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${keys.siteUrl}/signin`, formProps);
    localStorage.setItem('token', response.data.token);
    // then when you have the token decode it.
    let token = localStorage.token;
    if (token) {
      // Decode token
      token = JWT(token);
      // let token to variable data
      let data = token;
      data = {
        id: data.sub,
        email: data.email
      };
      const response = await axios.get(`/api/user/${data.id}`);
      dispatch({ type: AUTH_USER, payload: response.data });
      callback(data.id); /* history callback */
    } else {
      token = null;
    }
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

// Signout User by Auth or Passport JWT
export const signout = () => async dispatch => {
  // Signout for Auth(Google, insta, linkedin, facebook)
  await axios.get('/api/logout');
  dispatch({ type: AUTH_USER, payload: '' });
  localStorage.removeItem('token');
  dispatch({ type: AUTH_ERROR, payload: '' });
};

// Fetch the user by Passport JWT
export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/current_user');
    let token = localStorage.token;
    if (token) {
      // Decode token
      token = JWT(token);
      // let token to variable data
      let data = token;
      data = {
        id: data.sub,
        email: data.email
      };
      const response = await axios.get(`/api/user/${data.id}`);
      dispatch({ type: AUTH_USER, payload: response.data });
    } else {
      token = null;
      dispatch({ type: AUTH_USER, payload: res.data });
    }
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

// Edit User
export const editUser = (id, formValues, callback) => async dispatch => {
  try {
    dispatch({ type: AUTH_ERROR, payload: '' });
    const response = await axios.post(`/api/user/${id}`, formValues);
    dispatch({ type: EDIT_USER, payload: response.data });
    callback(); /* history callback */
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Cannot edit user' });
  }
};

// Edit delete
export const deleteUser = (id, callback) => async dispatch => {
  await axios.delete(`/api/user/${id}`);
  dispatch({ type: EDIT_USER, payload: '' });
  localStorage.removeItem('token');
  callback(); /* history callback */
};

/////////////////////////////// User ////////////////////////////////////////////////////
export const getAllUser = () => async dispatch => {
  try {
    const response = await axios.get(`/api/dashboard`);
    dispatch({ type: GET_ALL_USERS, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_ALL_USERS_ERROR,
      payload: 'cannot find the users'
    });
  }
};

/////////////////////////////// Discover ////////////////////////////////////////////////////
// Get all Discover
export const getAllDiscover = () => async dispatch => {
  try {
    const response = await axios.get(`/api/discover`);
    dispatch({ type: GET_ALL_DISCOVERS, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_ALL_DISCOVERS_ERROR,
      payload: 'error to get all discover'
    });
  }
};

// Get Discover by user
export const getDiscoverByUser = id => async dispatch => {
  try {
    const response = await axios.get(`/api/dashboard/${id}`);
    dispatch({ type: GET_DISCOVERS, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_DISCOVERS_ERROR,
      payload: 'cannot find the discovers by user'
    });
  }
};

// Post Discover
export const createDiscover = formValues => async dispatch => {
  try {
    const response = await axios.post(`/api/dashboard`, formValues);
    dispatch({ type: CREATE_DISCOVER, payload: response.data });
  } catch (e) {
    dispatch({
      type: DISCOVER_ERROR,
      payload: 'error to create discover'
    });
  }
};

////////////////////////////// Chat ///////////////////////////////////
export const createChatRoom = formValues => async dispatch => {
  try {
    const response = await axios.post(`/api/create/chatroom`, formValues);
    dispatch({ type: CREATE_CHAT, payload: response.data });
  } catch (e) {
    dispatch({
      type: ERROR_CHAT,
      payload: 'error to create chatroom'
    });
  }
};

// Get chatRoom by id
export const getChatroom = id => async dispatch => {
  try {
    const response = await axios.post(`/api/chatroom/${id}`);
    dispatch({ type: GET_CHATROOM, payload: response.data });
  } catch (e) {
    dispatch({
      type: CHATROOM_ERROR,
      payload: 'error to get chatroom'
    });
  }
};

////////////////////////////////////// Message ///////////////////////////////
export const createMessage = message => async dispatch => {
  try {
    const response = await axios.post(`/api/create/message`, message);
    dispatch({ type: CREATE_MESSAGE, payload: response.data });
  } catch (e) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: 'error to create message'
    });
  }
};

// Get all Message by chatroom
export const getAllMessageByChatroom = (id, callback) => async dispatch => {
  try {
    const response = await axios.post(`/api/allmessage/${id}`);
    dispatch({ type: GET_MESSAGE, payload: response.data });
    callback();
  } catch (e) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: 'error to get message'
    });
  }
};
