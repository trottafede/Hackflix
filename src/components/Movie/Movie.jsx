import React from "react";

function Movie({ Movie, setModalShow, SetMovieToModal, MoviesList }) {
  const handleClick = (e) => {
    setModalShow(true);

    const result = MoviesList.filter((movie) => {
      return movie.id.toString() === e.target.id;
    });
    SetMovieToModal(result);
  };
  return (
    <div>
      <img
        onClick={handleClick}
        id={Movie.id}
        src={Movie.poster_path}
        alt={Movie.title}
      />
    </div>
  );
}

export default Movie;
