import {
  COMPLETED_MOVIES_LIST,
  SET_ERROR,
  START_DETAILS_FETCHED,
  COMPLETED_DETAILS_FETCHED,
  START_MOVIES_LIST,
} from "../actions/types";

const initialState = false;

export const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case START_MOVIES_LIST:
      return true;
    case COMPLETED_MOVIES_LIST:
      return false;
    case START_DETAILS_FETCHED:
      return true;
    case COMPLETED_DETAILS_FETCHED:
      return false;
    case SET_ERROR:
      return false;
    default:
      return state;
  }
};
