import { loadingReducer } from "..";
import {
  START_MOVIES_LIST,
  START_DETAILS_FETCHED,
  COMPLETED_MOVIES_LIST,
  COMPLETED_DETAILS_FETCHED,
  SET_ERROR,
} from "../../actions/types";

describe("loading-reducer", () => {
  test("that returns correctly the initial state", () => {
    expect(loadingReducer(undefined, {})).toBe(false);
  });

  test("that startMovieList is working correctly", () => {
    expect(loadingReducer(false, { type: START_MOVIES_LIST })).toBe(true);
  });

  test("that startFetchDetails is working correctly", () => {
    expect(loadingReducer(false, { type: START_DETAILS_FETCHED })).toBe(true);
  });

  test("that completedMoviesList is working correctly", () => {
    expect(loadingReducer(true, { type: COMPLETED_MOVIES_LIST })).toBe(false);
  });

  test("that completedDetailsFetched is working correctly", () => {
    expect(loadingReducer(true, { type: COMPLETED_DETAILS_FETCHED })).toBe(
      false
    );
  });

  test("that setError is working correctly", () => {
    expect(loadingReducer(true, { type: SET_ERROR })).toBe(false);
  });
});
