import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <div className="container footer__container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src="" className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/movies" className="footer__link">Movies</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2024 Movie Mania</div>
                </div>
            </div>
        </footer>  
    );
}
export default Footer;