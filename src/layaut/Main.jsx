import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Main() {
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=86933a24a0cc7d517ee75ea5ac3894aa&query=";
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=86933a24a0cc7d517ee75ea5ac3894aa"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="content">
      <div className="main">
        <div className="main_title">
          <a href="/">
            <h1>Movie</h1>
          </a>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setTerm(e.target.value)}
              className="search_input"
              placeholder="Search.."
            />
            <button className="search_btn">Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
}
