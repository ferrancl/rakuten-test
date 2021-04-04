import React, { useEffect, useRef } from "react";
import { LEFT, RIGHT } from "../../constants";
import "./styles.css";

export const MoviesList = ({ onclick, movies, handleScroll }) => {
  const moviesCarousel = useRef();
  const movieItem = useRef();

  return (
    <div className="category__movies">
      <div className="category__movies-left">
        <i
          className="fas fa-angle-left fa-3x"
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => handleScroll(moviesCarousel, movieItem, LEFT)}
        ></i>
      </div>
      <div className="category__movies-carousel" ref={moviesCarousel}>
        {movies?.map(({ movieId, image }) => {
          return (
            <div
              className="category__movies-item"
              onClick={() => onclick(movieId)}
              ref={movieItem}
              key={movieId}
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="category__movies-right">
        <i
          onClick={() => handleScroll(moviesCarousel, movieItem, RIGHT)}
          className="fas fa-angle-right fa-3x"
          style={{ color: "white", cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
};
