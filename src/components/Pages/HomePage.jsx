import "../../App.css";
import { useState, useEffect } from "react";
import Movies from "../Movie/MovieList";
import Header from "../header/Header";
import IsOnline from "../isOnline/IsOnline";
function HomePage() {
  const [textValue, SetTextValue] = useState("");
  const [starsValue, SetStarsValue] = useState("0");

  const [MoviesList, Setmovies] = useState([]);

  const [number, SetNumber] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const axios = require("axios").default;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=d31155cbf820bd18cd5b553ec0cb5b0f&language=en-US&page=${number}`;

  function axiosCall() {
    axios.get(url).then((response) => {
      Setmovies((MoviesList) => [...MoviesList, ...response.data.results]);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    axiosCall();
    window.onscroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        SetNumber((n) => n + 1);
      }
    }; // eslint-disable-next-line
  }, [number]);

  return (
    <div className="App">
      <Header SetTextValue={SetTextValue} SetStarsValue={SetStarsValue} />
      <IsOnline />
      <Movies
        variant="primary"
        MoviesList={MoviesList}
        textValue={textValue}
        starsValue={starsValue}
        isLoading={isLoading}
      />
    </div>
  );
}
export default HomePage;
