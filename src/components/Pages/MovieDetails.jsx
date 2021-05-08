import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function MovieDetails() {
  const axios = require("axios").default;

  let slug = useParams();

  const url = `https://api.themoviedb.org/3/movie/${slug.id}?api_key=d31155cbf820bd18cd5b553ec0cb5b0f`;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data);
      setIsLoading(false);
    }); // eslint-disable-next-line
  }, [isLoading]);
  const fileSize = "/w500";
  const imgUrl = "https://image.tmdb.org/t/p" + fileSize + movie.poster_path;

  return (
    <div>
      {!isLoading ? (
        <div className="container">
          <div className="mb-4">
            <nav className="navbar navbar-light bg-transparent">
              <div className="container">
                <a href="/">
                  <span>Hackflix</span>
                </a>

                <NavLink exact activeClassName="active" to="/">
                  Volver
                </NavLink>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col-4">
              <div>
                <img
                  className="movie"
                  alt={movie.original_title}
                  src={imgUrl}
                />
              </div>
            </div>

            <div className="col-8">
              <div>
                <h1 className="text-center"> {movie.title} </h1>
              </div>

              <div>
                <p>{movie.overview}</p>
              </div>

              <div>
                <p>Rating: {movie.vote_average}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
    </div>
  );
}

export default MovieDetails;
