import keys from '../../config/keys';
import axios from 'axios';
import {
  // user
  AUTH_USER,
  AUTH_ERROR,
  AUTH_ERROR_SIGNUP,
  EDIT_USER,
  GET_ALL_USERS,
  GET_ALL_USERS_ERROR,
  GET_USER,
  GET_USER_ERROR,
  // discover
  CREATE_DISCOVER,
  DISCOVER_ERROR,
  GET_ALL_DISCOVERS,
  GET_ALL_DISCOVERS_ERROR,
  GET_DISCOVERS,
  GET_DISCOVERS_ERROR,
  // chat
  CREATE_CHAT,
  ERROR_CHAT,
  GET_USERS_BY_CHATROOM,
  GET_USERS_BY_CHATROOM_ERROR,
  CREATE_MESSAGE,
  MESSAGE_ERROR,
  GET_MESSAGE,
  GET_ALL_CHAT_BY_USER,
  ERROR_ALL_CHAT_BY_USER,
  READ_MESSAGE,
  ERROR_READ_MESSAGE,
  // briefcard-Template
  CREATE_BRIEFCARD_TEMPLATE,
  ERROR_BRIEFCARD_TEMPLATE,
  GET_ALL_BRIEFCARD_TEMPLATE,
  GET_BRIEFCARD_TEMPLATE,
  EDIT_BRIEFCARD_TEMPLATE,
  // BriefCard
  CREATE_BRIEFCARD,
  ERROR_BRIEFCARD,
  GET_BRIEFCARD,
  EDIT_BRIEFCARD,
  GET_BRIEFCARD_BY_CHATROOM,
} from './types';
import * as JWT from 'jwt-decode';

///////////////////////////////// User Authentification ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Signup with Passport JWT
export const signup = (formProps, callback) => async (dispatch) => {
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
        email: data.email,
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
export const signin = (formProps, callback) => async (dispatch) => {
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
        email: data.email,
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
export const signout = () => async (dispatch) => {
  // Signout for Auth(Google, insta, linkedin, facebook)
  await axios.get('/api/logout');
  dispatch({ type: AUTH_USER, payload: '' });
  localStorage.removeItem('token');
  dispatch({ type: AUTH_ERROR, payload: '' });
};

// Fetch the user by Passport JWT
export const fetchUser = () => async (dispatch) => {
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
        email: data.email,
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
export const editUser = (id, formValues, callback) => async (dispatch) => {
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
export const deleteUser = (id, callback) => async (dispatch) => {
  await axios.delete(`/api/user/${id}`);
  dispatch({ type: EDIT_USER, payload: '' });
  localStorage.removeItem('token');
  callback(); /* history callback */
};

/////////////////////////////// User ////////////////////////////////////////////////////
export const getAllUser = () => async (dispatch) => {
  try {
    const response = await axios.get(`/api/dashboard`);
    dispatch({ type: GET_ALL_USERS, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_ALL_USERS_ERROR,
      payload: 'cannot find the users',
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/chatroom/user/${id}`);
    dispatch({ type: GET_USER, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_USER_ERROR,
      payload: 'cannot find the user',
    });
  }
};

/////////////////////////////// Discover ////////////////////////////////////////////////////
// Get all Discover
export const getAllDiscover = () => async (dispatch) => {
  try {
    const response = await axios.get(`/api/discover`);
    dispatch({ type: GET_ALL_DISCOVERS, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_ALL_DISCOVERS_ERROR,
      payload: 'error to get all discover',
    });
  }
};

// Get Discover by user
export const getDiscoverByUser = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/dashboard/${id}`);
    dispatch({ type: GET_DISCOVERS, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_DISCOVERS_ERROR,
      payload: 'cannot find the discovers by user',
    });
  }
};

// Post Discover
export const createDiscover = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/dashboard`, formValues);
    dispatch({ type: CREATE_DISCOVER, payload: response.data });
  } catch (e) {
    dispatch({
      type: DISCOVER_ERROR,
      payload: 'error to create discover',
    });
  }
};

////////////////////////////// Chat ///////////////////////////////////
export const createChatRoom = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/create/chatroom`, formValues);
    dispatch({ type: CREATE_CHAT, payload: response.data });
  } catch (e) {
    dispatch({
      type: ERROR_CHAT,
      payload: 'error to create chatroom',
    });
  }
};

// Get chatRoom by id
export const getUsersChatroom = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/chatroom/${id}`);
    dispatch({ type: GET_USERS_BY_CHATROOM, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_USERS_BY_CHATROOM_ERROR,
      payload: 'error to get users chatroom',
    });
  }
};

// Get get All Chat Room By USer
export const getAllChatRoomByUSer = (id, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/allchatbyuser/${id}`);
    dispatch({ type: GET_ALL_CHAT_BY_USER, payload: response.data });
    callback();
  } catch (e) {
    dispatch({
      type: ERROR_ALL_CHAT_BY_USER,
      payload: 'error to get all chatroom by user',
    });
  }
};

////////////////////////////////////// Message ///////////////////////////////
export const createMessage = (message) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/create/message`, message);
    dispatch({ type: CREATE_MESSAGE, payload: response.data });
  } catch (e) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: 'error to create message',
    });
  }
};

// Get all Message by chatroom
export const getAllMessageByChatroom = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/allmessage/${id}`);
    dispatch({ type: GET_MESSAGE, payload: response.data });
  } catch (e) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: 'error to get message',
    });
  }
};

// Get all Message unread by chatroom and user
export const readMessage = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/read/message`, form);
    dispatch({ type: READ_MESSAGE, payload: response.data });
  } catch (e) {
    dispatch({
      type: ERROR_READ_MESSAGE,
      payload: 'error to get unread message',
    });
  }
};

////////////////////////////////////// BriefCard-Template ///////////////////////////////
// Create BriefCard Template
export const createBriefCardTemplate = (form, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/create/briefcard-template`, form);
    dispatch({ type: CREATE_BRIEFCARD_TEMPLATE, payload: response.data });
    callback();
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD_TEMPLATE,
      payload: 'error to create briefcard',
    });
  }
};

//Get ALL BriefCard Template By user ID
export const getAllBriefCardTemplate = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/all-briefcard-template/${id}`);
    dispatch({ type: GET_ALL_BRIEFCARD_TEMPLATE, payload: response.data });
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD_TEMPLATE,
      payload: 'error to get all briefcard',
    });
  }
};

// Show Briefcard Template by ID
export const getBriefCardTemplate = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/briefcard-template/${id}`);
    dispatch({ type: GET_BRIEFCARD_TEMPLATE, payload: response.data });
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD_TEMPLATE,
      payload: 'error to get briefcard',
    });
  }
};

// Edit BriefCard Template by Id
export const editBriefCardTemplate = (id, form, callback) => async (
  dispatch
) => {
  try {
    const response = await axios.post(
      `/api/edit/briefcard-template/${id}`,
      form
    );
    dispatch({ type: EDIT_BRIEFCARD_TEMPLATE, payload: response.data });
    callback();
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD_TEMPLATE,
      payload: 'error to edit briefcard',
    });
  }
};

// add BriefCard Template by Id
export const addExperienceBriefCardTemplate = (id, form, callback) => async (
  dispatch
) => {
  try {
    const response = await axios.post(
      `/api/add/experience/briefcard-template/${id}`,
      form
    );
    dispatch({ type: EDIT_BRIEFCARD_TEMPLATE, payload: response.data });
    callback();
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD_TEMPLATE,
      payload: 'error to add experience briefcard',
    });
  }
};

/////////////////////////////////// BriefCard //////////////////////////////////

// Create BriefCard
export const createBriefCard = (form, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/create/briefcard`, form);
    dispatch({ type: CREATE_BRIEFCARD, payload: response.data });
    callback(response.data._id);
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD,
      payload: 'error to create briefcard',
    });
  }
};

// Get BriefCard
export const getBriefCard = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/briefcard/${id}`);
    dispatch({ type: GET_BRIEFCARD, payload: response.data });
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD,
      payload: 'error to get briefcard',
    });
  }
};

// Edit BriefCard by Id
export const editBriefCard = (id, form, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/edit/briefcard/${id}`, form);
    dispatch({ type: EDIT_BRIEFCARD, payload: response.data });
    callback();
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD,
      payload: 'error to edit briefcard',
    });
  }
};

//get briefcard send by chatroom id
export const getBriefCardByChatroom = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/briefcard/chatroom/${id}`);
    dispatch({ type: GET_BRIEFCARD_BY_CHATROOM, payload: response.data });
  } catch (e) {
    dispatch({
      type: ERROR_BRIEFCARD,
      payload: 'error to get briefcards by chatroom',
    });
  }
};
