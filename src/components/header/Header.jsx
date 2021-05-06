import React from "react";
import "./header.css";

function Header({ SetTextValue, SetStarsValue }) {
  const handleInput = (event) => {
    let movie = event.target.value.toLowerCase();
    SetStarsValue("0");

    SetTextValue(movie);
  };

  const handleStars = (stars) => {
    SetTextValue("");

    SetStarsValue(stars.target.id);
  };

  const stars = (
    <span className="stars">
      <i
        id={2}
        onClick={handleStars}
        className="fa fa-star"
        aria-hidden="true"
      ></i>

      <i
        id={4}
        onClick={handleStars}
        className="fa fa-star"
        aria-hidden="true"
      ></i>

      <i
        id={6}
        onClick={handleStars}
        className="fa fa-star"
        aria-hidden="true"
      ></i>

      <i
        id={8}
        onClick={handleStars}
        className="fa fa-star"
        aria-hidden="true"
      ></i>

      <i
        id={10}
        onClick={handleStars}
        className="fa fa-star"
        aria-hidden="true"
      ></i>
    </span>
  );

  return (
    <header>
      <div id="bgImage">
        <nav className="navbar navbar-light bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="/home">
              <span className=" white">Hackflix</span>
            </a>
            <a className="navbar-brand" href="/home">
              <span className=" white">Home</span>
            </a>
          </div>
        </nav>
        <div className="d-flex justify-content-center">
          <div>
            <h1>¡Tus peliculas favoritas!</h1>
            <h2>Buscá la que quieras ver!</h2>
            <input
              className=" form-control mt-3"
              placeholder="Busque su pelicula"
              type="text"
              name=""
              id=""
              onInput={handleInput}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-8 d-flex justify-content-center mb-3">
            <h3>Filtrar por rating {stars}</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
