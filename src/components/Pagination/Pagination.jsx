import React from "react";
import Button from "react-bootstrap/Button";

function Pagination({ SetMovieURL, number, SetNumber }) {
  const handleClickSiguiente = () => {
    const baseURL = "https://api.themoviedb.org/3/movie/";
    const apiKey = "d31155cbf820bd18cd5b553ec0cb5b0f";
    SetNumber(number + 1);
    SetMovieURL(
      baseURL +
        "popular?api_key=" +
        apiKey +
        "&language=en-US&page=" +
        (number + 1)
    );
  };

  const handleClickAnterior = () => {
    const baseURL = "https://api.themoviedb.org/3/movie/";
    const apiKey = "d31155cbf820bd18cd5b553ec0cb5b0f";
    SetNumber(number - 1);
    SetMovieURL(
      baseURL +
        "popular?api_key=" +
        apiKey +
        "&language=en-US&page=" +
        (number - 1)
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className=" d-flex justify-content-around">
            <Button onClick={handleClickAnterior}>Anterior</Button>
            <Button onClick={handleClickSiguiente}>Siguiente</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
