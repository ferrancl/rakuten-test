import React from "react";
import { useHistory } from "react-router-dom";
import { CategoryTitle, MoviesList } from "../../components/";
import { LEFT, RIGHT } from "../../constants";
import "./styles.css";

export const CategoryContainer = ({ movies, categoryName }) => {
  const history = useHistory();

  const handleScroll = (referenceCarousel, referenceMovie, side) => {
    const scroll =
      Math.floor(
        referenceCarousel.current.offsetWidth /
          referenceMovie.current.offsetWidth
      ) * referenceMovie.current.offsetWidth;

    if (side === LEFT) referenceCarousel.current.scrollLeft -= scroll;
    if (side === RIGHT) referenceCarousel.current.scrollLeft += scroll;
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
