import React from "react";
import Undraw1 from "../assets/undraw_horror_movie_3988.svg";
import Undraw2 from "../assets/undraw_home_cinema_l7yl (1).svg"
import Undraw3 from "../assets/undraw_movie_night_re_9umk.svg"
import InputForm from "../components/InputForm";

const Home = () => {

    return ( 
        <div className="container">
            <div className="row">
                <InputForm />
                <div className="search__container">
                    <div className="search__header">
                        <img src={Undraw1} className="img" />
                        <div className="search__section">
                            <h1 className="search__title">Your Gateway to the Movie Universe</h1>
                            <h2 className="search__title">
                            Uncover hidden gems and popular shows. Find the
                            <span className="blue"> perfect movie for every moment!</span>
                            </h2>
                        </div>
                        <img src={Undraw2} className="img" />
                    </div>
                    <figure className="img__wrapper">
                        <img
                            src={Undraw3}
                            className="img__solo img"
                        />
                    </figure>
                </div>
            </div>
        </div> 
    );
}


export default Home;