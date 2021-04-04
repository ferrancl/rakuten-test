import fetch from "fetch";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchMoviesList } from ".";
import { CONTENT_LIST } from "../../constants";
import {
  START_MOVIES_LIST,
  COMPLETED_MOVIES_LIST,
  SET_ERROR,
} from "../../actions/types";

const mockStore = configureMockStore([thunk]);
const initialState = {
  loading: false,
  error: null,
  moviesList: [],
};
let store;

describe("testing fetchMoviesList thunk", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("that dispatches the actions correctly on success", async () => {
    await store.dispatch(fetchMoviesList(CONTENT_LIST));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(START_MOVIES_LIST);
    expect(actions[1].type).toEqual(COMPLETED_MOVIES_LIST);
  });

  test("that dispatches setError actions", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        status: 404,
      })
    );
    await store.dispatch(fetchMoviesList(CONTENT_LIST));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(START_MOVIES_LIST);
    expect(actions[1].type).toEqual(SET_ERROR);
  });

  afterEach(() => {
    fetch.mockClear();
  });
});
