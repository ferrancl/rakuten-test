import { START_DETAILS_FETCHED, COMPLETED_DETAILS_FETCHED } from "./types";

export const startDetailsFetched = () => ({
  type: START_DETAILS_FETCHED,
});

export const completedDetailsFetched = (payload) => ({
  type: COMPLETED_DETAILS_FETCHED,
  payload,
});
