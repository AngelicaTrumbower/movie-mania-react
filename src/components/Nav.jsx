import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="nav-bar">
            <div className="nav-container">
                <div className="logo">
                    <h1>Movie Mania</h1>
                </div>
                <div className="nav__links">
                    <Link to="/" className="nav__link hover-effect">Home</Link>
                    <Link to="/movies" className="nav__link hover-effect">Discover Your <span className="blue">Movie</span></Link>
                </div>
            </div>
      </header>
    );
}

export default Nav;