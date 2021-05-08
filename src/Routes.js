import HomePage from "./components/Pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetails from "./components/Pages/MovieDetails";
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:id" component={MovieDetails} />
    </Router>
  );
}
export default App;
