import { START_MOVIES_LIST, COMPLETED_MOVIES_LIST } from "./types";

export const startMoviesList = () => ({
  type: START_MOVIES_LIST,
});

export const completedMoviesList = (payload) => ({
  type: COMPLETED_MOVIES_LIST,
  payload,
});
