import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";


const Movie = ({ movie }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = movie.Poster;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 2000);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [movie.Poster]);

  return (
    <div className="movie">
      {!img ? (
        <>
          <div className="img--skeleton"></div>
          <div className="title--skeleton"></div>
          <div className="year--skeleton"></div>
        </>
      ) : (
        <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID} className="movie">
          <img src= {movie.Poster} />
          <p className="movie__link">"{movie.Title}" </p>
          <p className="movie__link">{movie.Year}</p>
        </Link>
      )}
    </div>
  );
};

export default Movie;
