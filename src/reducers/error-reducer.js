import { REMOVE_ERROR, SET_ERROR } from "../actions/types";
import { ERROR_TEXT } from "../constants";

const initialState = null;

export const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR:
      return {
        status: payload,
        message: ERROR_TEXT,
      };

    case REMOVE_ERROR:
      return null;

    default:
      return state;
  }
};
