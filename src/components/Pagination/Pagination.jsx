import React from "react";
import Button from "react-bootstrap/Button";

function Pagination({ SetMovieURL, number, SetNumber }) {
  const handleClick = () => {
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
  return (
    <div>
      <Button onClick={handleClick}>Siguiente</Button>
    </div>
  );
}

export default Pagination;
