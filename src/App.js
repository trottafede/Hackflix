import "./App.css";
import { useState } from "react";

import Movies from "./components/Movie/MovieList";
import MoviesList from "./data/MoviesList";

import Header from "./components/header/Header";
import MyVerticallyCenteredModal from "./components/Modal/Modal";

function App() {
  const [textValue, SetTextValue] = useState("");
  const [starsValue, SetStarsValue] = useState("0");
  const [modalShow, setModalShow] = useState(false);
  const [movieToModal, SetMovieToModal] = useState(0);
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
