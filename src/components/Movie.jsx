import React, { useEffect, useState, useRef } from "react";


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
      }, 30);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [movie.Poster]);

  return (
    <div>
      {!img ? (
        <>
          <div className="img--skeleton"></div>
          <div className="title--skeleton skeleton"></div>
          <div className="year--skeleton skeleton"></div>
        </>
      ) : (
        <div key={movie.imdbID} className="movie__listing">
          <img src= {movie.Poster} />
          <p>"{movie.Title}" </p>
          <p>{movie.Year}</p>
        </div>
      )}
    </div>
  );
};

export default Movie;
