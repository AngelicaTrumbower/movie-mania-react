import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies  />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
