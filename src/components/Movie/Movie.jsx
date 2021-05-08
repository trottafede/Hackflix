import React from "react";
import Spinner from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Movie({ Movie, MoviesList, isLoading }) {
  const fileSize = "/w500";
  const imgUrl = "https://image.tmdb.org/t/p" + fileSize + Movie.poster_path;

  // const handleClick = (e) => {
  //   const result = MoviesList.filter((movie) => {
  //     return movie.id.toString() === e.target.id;
  //   });
  // };
  return (
    <div>
      {!isLoading ? (
        <div className="movie">
          <ul>
            <Link to={`/movie/${Movie.id}`}>
              <img id={Movie.id} src={imgUrl} alt={Movie.title} />
            </Link>
          </ul>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default Movie;
