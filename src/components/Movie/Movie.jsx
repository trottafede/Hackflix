import React from "react";

function Movie({ Movie, setModalShow, SetMovieToModal, MoviesList }) {
  const fileSize = "/w500";
  const imgUrl = "https://image.tmdb.org/t/p" + fileSize + Movie.poster_path;

  const handleClick = (e) => {
    setModalShow(true);

    const result = MoviesList.filter((movie) => {
      return movie.id.toString() === e.target.id;
    });
    SetMovieToModal(result);
  };
  return (
    <div className="movie">
      <img onClick={handleClick} id={Movie.id} src={imgUrl} alt={Movie.title} />
    </div>
  );
}

export default Movie;
