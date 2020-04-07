import {
  GET_ALL_BRIEFCARD_TEMPLATE,
  GET_BRIEFCARD_TEMPLATE,
  CREATE_BRIEFCARD_TEMPLATE,
  ERROR_BRIEFCARD_TEMPLATE,
} from '../actions/types';
const INITIAL_STATE = {
  templates: '',
  createBriefcardTemplate: '',
  briefcardTemplateContent: '',
  errorBriefcardTemplate: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_BRIEFCARD_TEMPLATE:
      return { ...state, createBriefcardTemplate: action.payload || false };
    case GET_ALL_BRIEFCARD_TEMPLATE:
      return { ...state, templates: action.payload || false };
    case GET_BRIEFCARD_TEMPLATE:
      return { ...state, briefcardTemplateContent: action.payload || false };
    case ERROR_BRIEFCARD_TEMPLATE:
      return { ...state, errorBriefcardTemplate: action.payload };
    default:
      return state;
  }
}
