import "./MovieStyles.css";
import Movie from "./Movie";

function Movies({
  MoviesList,
  textValue,
  starsValue,
  setModalShow,
  SetMovieToModal,
}) {
  const FilteredMovieByRating = MoviesList.filter(
    (movie) => movie.vote_average >= starsValue
  );

  const filteredOutputByRating = FilteredMovieByRating.map((movie) => {
    return (
      <div className="col-xxl-2 col-xl-3 col-sm-3 " key={movie.id}>
        <Movie
          SetMovieToModal={SetMovieToModal}
          setModalShow={setModalShow}
          Movie={movie}
          MoviesList={MoviesList}
        />
      </div>
    );
  });

  const allMoviesTogether = MoviesList.map((movie) => {
    return (
      <div className="col-xxl-2 col-xl-3 col-sm-3 " key={movie.id}>
        <Movie
          SetMovieToModal={SetMovieToModal}
          setModalShow={setModalShow}
          Movie={movie}
          MoviesList={MoviesList}
        />
      </div>
    );
  });

  const FilteredMovieByTextValue = MoviesList.filter((movie) =>
    movie.title.toLowerCase().includes(textValue.toLowerCase())
  );

  const filteredOutputByText = FilteredMovieByTextValue.map((movie) => {
    return (
      <div className="col-xxl-2 col-xl-3 col-sm-3 " key={movie.id}>
        <Movie
          SetMovieToModal={SetMovieToModal}
          setModalShow={setModalShow}
          Movie={movie}
          MoviesList={MoviesList}
        />
      </div>
    );
  });

  function handleOutput(textValue, starsValue) {
    if (
      starsValue === "10" ||
      starsValue === "8" ||
      starsValue === "6" ||
      starsValue === "4" ||
      starsValue === "2"
    ) {
      return filteredOutputByRating;
    }

    if (textValue === "") {
      return allMoviesTogether;
    }

    if (textValue !== "") {
      return filteredOutputByText;
    }
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-between g-2">
        {handleOutput(textValue, starsValue)}
      </div>
    </div>
  );
}

export default Movies;
