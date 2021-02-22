import React from "react";
import { useHistory } from "react-router-dom";
import { CategoryTitle, MoviesList } from "../../components/";
import { LEFT, RIGHT } from "../../constants";
import "./styles.css";

export const CategoryContainer = ({ movies, categoryName }) => {
  const history = useHistory();

  const handleScroll = (reference, side) => {
    if (side === LEFT)
      reference.current.scrollLeft -= reference.current.offsetWidth;
    if (side === RIGHT)
      reference.current.scrollLeft += reference.current.offsetWidth;
  };
  const handleGoToDetails = (id) => {
    history.push(`movies/${id}`);
  };

  return (
    <div className="category">
      <CategoryTitle categoryName={categoryName} />
      <MoviesList
        onclick={handleGoToDetails}
        movies={movies}
        handleScroll={handleScroll}
      />
    </div>
  );
};
