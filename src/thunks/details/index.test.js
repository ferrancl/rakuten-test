import fetch from "fetch";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchDetail } from ".";
import {
  START_DETAILS_FETCHED,
  COMPLETED_DETAILS_FETCHED,
  SET_ERROR,
} from "../../actions/types";

const mockStore = configureMockStore([thunk]);
const initialState = {
  loading: false,
  error: null,
  details: null,
};
let store;

describe("testing fetchMoviesList thunk", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("that dispatches the actions correctly on success", async () => {
    await store.dispatch(fetchDetail("category"));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(START_DETAILS_FETCHED);
    expect(actions[1].type).toEqual(COMPLETED_DETAILS_FETCHED);
  });

  test("that dispatches setError actions", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        status: 404,
      })
    );
    await store.dispatch(fetchDetail("fake category"));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(START_DETAILS_FETCHED);
    expect(actions[1].type).toEqual(SET_ERROR);
  });
  afterEach(() => {
    fetch.mockClear();
  });
});
