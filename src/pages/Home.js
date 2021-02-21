import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../components";
import { CategoryContainer } from "../containers/";
import { moviesSelector } from "../selectors";
import { fetchMoviesList } from "../thunks/movies";
import { CONTENT_LIST } from "../constants";

export const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, existsList } = useSelector(moviesSelector);

  useEffect(() => {
    if (!existsList) {
      dispatch(fetchMoviesList(CONTENT_LIST));
    }
  }, [dispatch, existsList]);

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
