import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import banner from "../../../assets/layout/banner.jpg";

const Home = () => {

  return (
    <section className="home">
      <div className="home__wrap">
        <h2 className="home__title">
          Piskel is a free online editor for animated sprites & pixel art
        </h2>
        <p className="home__text">
          Create animations in your browser. Try an example, use Google sign in to access your
          gallery or simply create a new sprite.
        </p>
        <div className="home__wrapBtn">
          <Link to="/application">
            <button type="button" className="home__btn home__createBtn">
              Create Sprite
            </button>
          </Link>
        </div>
      </div>
      <div className="home__img">
        <img src={banner} alt="homeImage" />
      </div>
    </section>
  );
};

export default Home;
