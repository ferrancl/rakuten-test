import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  errorReducer,
  moviesReducer,
  detailsReducer,
  loadingReducer,
} from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  error: errorReducer,
  movies: moviesReducer,
  details: detailsReducer,
  loading: loadingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
