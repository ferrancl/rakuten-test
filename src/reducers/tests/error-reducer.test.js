import { errorReducer } from "../";
import { SET_ERROR, REMOVE_ERROR } from "../../actions/types";
import { ERROR_TEXT } from "../../constants";

describe("error reducer", () => {
  test("it is returning the initial state correctly", () => {
    expect(errorReducer(undefined, {})).toBe(null);
  });

  test("it is managing correctly setError", () => {
    const payload = Math.random();

    expect(errorReducer(null, { type: SET_ERROR, payload })).toEqual({
      status: payload,
      message: ERROR_TEXT,
    });
  });

  test("that it removes correctly the error with removeError action", () => {
    const state = Math.random();

    expect(errorReducer(state, { type: REMOVE_ERROR })).toBe(null);
  });
});
