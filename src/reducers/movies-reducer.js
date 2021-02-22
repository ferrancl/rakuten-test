import { COMPLETED_MOVIES_LIST, SET_ERROR } from "../actions/types";

const initialState = [];

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COMPLETED_MOVIES_LIST:
      return payload;
    case SET_ERROR:
      return [];
    default:
      return state;
  }
};
