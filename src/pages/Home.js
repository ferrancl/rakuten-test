import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Loader } from "../components";
import { CategoryContainer } from "../containers/";
import { moviesSelector, loadingSelector } from "../selectors";
import { fetchMoviesList } from "../thunks/movies";
import { CONTENT_LIST } from "../constants";

export const Home = () => {
  const dispatch = useDispatch();
  const movies  = useSelector(moviesSelector, shallowEqual);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMoviesList(CONTENT_LIST));
    }
  }, [dispatch, movies]);

  if (loading) return <Loader />;

  return (
    <>
      {movies.map(({ id, categoryName, moviesList }) => (
        <CategoryContainer
          movies={moviesList}
          categoryName={categoryName}
          key={id}
        />
      ))}
    </>
  );
};
