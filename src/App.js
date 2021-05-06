import "./App.css";
import { useState, useEffect } from "react";

import Movies from "./components/Movie/MovieList";
// import MoviesList from "./data/MoviesList";

import Header from "./components/header/Header";
import MyVerticallyCenteredModal from "./components/Modal/Modal";

const axios = require("axios").default;

const apiKey = "d31155cbf820bd18cd5b553ec0cb5b0f";
const movieID = 21;
let url =
  "https://api.themoviedb.org/3/movie/" +
  movieID.toString() +
  "?api_key=" +
  apiKey;

let number = "1";
const url2 =
  "https://api.themoviedb.org/3/movie/popular?api_key=d31155cbf820bd18cd5b553ec0cb5b0f&language=en-US&page=" +
  number;
function App() {
  const [textValue, SetTextValue] = useState("");
  const [starsValue, SetStarsValue] = useState("0");
  const [modalShow, setModalShow] = useState(false);
  const [movieToModal, SetMovieToModal] = useState(0);

  const [MoviesList, Setmovies] = useState([]);

  useEffect(() => {
    axios.get(url2).then((response) => {
      // Setmovies([...MoviesList, response.data]);
      Setmovies(response.data.results);
    });
  }, []);
  console.log(MoviesList);

  return (
    <div className="App">
      <Header SetTextValue={SetTextValue} SetStarsValue={SetStarsValue} />

      <Movies
        variant="primary"
        MoviesList={MoviesList}
        textValue={textValue}
        starsValue={starsValue}
        setModalShow={setModalShow}
        SetMovieToModal={SetMovieToModal}
      />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        movie={movieToModal}
      />
    </div>
  );
}

export default App;
