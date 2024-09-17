import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieInfo = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState([]);
    const [img, setImg] = useState();
    const mountedRef = useRef(true);

    const [imageLoading, setImageLoading] = useState(false);

    useEffect(() => {
      async function fetchMovieInfo() {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=72e6749a&i=${id}`);
        const movie = data;
        setMovieData(movie);
        console.log(movieData);
        setImageLoading(true);
      }
      fetchMovieInfo();
    }, [id]);
    
    useEffect(() => {
      if (imageLoading && movieData.Poster) {
        const image = new Image();
        image.src = movieData.Poster;
        image.onload = () => {
          setTimeout(() => {
            if (mountedRef.current) {
              setImg(image);
            }
          }, 2000);
        };
      }
    }, [imageLoading, movieData.Poster ]);


    return (
        <div className="container">
            <div className="row">
                <div className="movie__selected--top">
                    <Link to="/movies" className="movie__link" > 
                        <h2 className="movie__selected--top--title hover-effect">   Go Back</h2>
                    </Link>
                </div>
                {!img ? (
                    <div className="movie__selected--skeleton">
                        <figure className="movie__selected--figure-skeleton">
                            <img src="" alt="" />
                        </figure>
                        <div className="movie__selected--description-skeleton">
                            <h2 className="movie__selected--title skeleton"></h2>
                            <p className="movie__selected--year skeleton"></p>
                            <p className="movie__selected--genre skeleton "></p>
                            <p className="movie__selected--rated skeleton"></p>
                            <p className="movie__selected--plot skeleton"></p>
                            <p className="movie__selected--actors skeleton"></p>
                            <p className="movie__selected--rating skeleton"></p>
                            <p className="movie__selected--rating skeleton"></p>

                        </div>
                    </div>
                ) : (
                    <div className="movie__selected">
                        <figure className="movie__selected--figure">
                            <img src={movieData.Poster} alt="" />
                        </figure>
                        <div className="movie__selected--description">
                            <h2 className="movie__selected--title">{movieData.Title}</h2>
                            <p className="movie__selected--year">Year: {movieData.Year}</p>
                            <p className="movie__selected--genre">Genre: {movieData.Genre}</p>
                            <p className="movie__selected--rated">Rated: {movieData.Rated}</p>
                            <p className="movie__selected--plot">Plot Summary: {movieData.Plot}</p>
                            <p className="movie__selected--actors">Actors: {movieData.Actors}</p>
                            <p className="movie__selected--rating">Rating: {movieData.imdbRating}</p>
                            <p className="movie__selected--rating">Runtime: {movieData.Runtime}</p>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MovieInfo;