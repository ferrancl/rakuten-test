import React from "react";
import { useHistory } from "react-router-dom";
import { CategoryTitle, MoviesList } from "../../components/";
import "./styles.css";

export const CategoryContainer = ({ movies, categoryName }) => {
  const history = useHistory();

  const handleGoToDetails = (id) => {
    history.push(`movies/${id}`);
  };

  return (
    <div className="category">
      <CategoryTitle categoryName={categoryName} />
      <MoviesList onclick={handleGoToDetails} movies={movies} />
    </div>
  );
};
