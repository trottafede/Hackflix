import "./App.css";
import { useState, useEffect } from "react";

import Movies from "./components/Movie/MovieList";
import Header from "./components/header/Header";
import MyVerticallyCenteredModal from "./components/Modal/Modal";
const axios = require("axios").default;

function App() {
  const [textValue, SetTextValue] = useState("");
  const [starsValue, SetStarsValue] = useState("0");
  const [modalShow, setModalShow] = useState(false);
  const [movieToModal, SetMovieToModal] = useState(0);

  const [MoviesList, Setmovies] = useState([]);

  const baseURL = "https://api.themoviedb.org/3/movie/";
  const apiKey = "d31155cbf820bd18cd5b553ec0cb5b0f";

  const [number, SetNumber] = useState(1);

  const [MovieURL, SetMovieURL] = useState(
    baseURL + "popular?api_key=" + apiKey + "&language=en-US&page=" + number
  );
  console.log("Por qué miras mi consola?!");

  useEffect(() => {
    axios.get(MovieURL).then((response) => {
      Setmovies((MoviesList) => [...MoviesList, ...response.data.results]);
    });
  }, [MovieURL]);

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight
      ) {
        SetNumber(number + 10);
        SetMovieURL(
          baseURL +
            "popular?api_key=" +
            apiKey +
            "&language=en-US&page=" +
            (number + 0)
        );
      }
    };
  }, [number]);

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
