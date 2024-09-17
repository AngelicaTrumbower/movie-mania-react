import React, { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../components/InputForm";
import Movie from "../components/Movie";

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesData, setMoviesData] = useState([]); 

  function filterMovies(filter) {
    if(filter === "Title:A-Z") {
        setMoviesData(moviesData.slice().sort((a, b) => a.Title.localeCompare(b.Title)));
    }
    if (filter === "Year:New to Old") {
        setMoviesData(moviesData.slice().sort((a, b) => b.Year - a.Year));
    }
    if (filter === "Year:Old to New") {
        setMoviesData(moviesData.slice().sort((a, b) => a.Year - b.Year));
    };
    
  };

  useEffect(() => {
    async function fetchMovies() {
      const storedInputValue = localStorage.getItem('inputValue');
      setInputValue(storedInputValue);

      console.log(storedInputValue);

      const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=72e6749a&s=${storedInputValue}`);
      const movies = data.Search;
      setMoviesData(movies);
      
      console.log(movies);
    }

    fetchMovies(); 
  }, []);

  return (
    <div className="container">
      <div className="row">
        <InputForm />
        <div className="filter">
          <select id="filter" onChange={(event) => filterMovies(event.target.value)} >
            <option value="">Sort</option>
            <option value="Title:A-Z">Title:A-Z</option>
            <option value="Year:New to Old">Year:New to Old</option>
            <option value="Year:Old to New">Year:Old to New</option>
          </select>
        </div>
        <div className="movie__container">
          {moviesData.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;