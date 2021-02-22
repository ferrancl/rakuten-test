import {
  completedDetailsFetched,
  setError,
  startDetailsFetched,
} from "../../actions";
import { DETAIL_ENDPOINT } from "../../constants";
import { fetchData } from "../../utils/fetchData";

const { endpoint, method } = DETAIL_ENDPOINT;

export const fetchDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startDetailsFetched());
      const fetchedDetails = await fetchData(id, endpoint, method);
      return dispatch(completedDetailsFetched(fetchedDetails));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
