import "./App.css";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

function App() {
  const [counter, setCounter] = useState(0);

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("girls");
  const api = `https://api.tvmaze.com/search/shows?q=${query}`;

  const getMovies = async () => {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    setMovies(data);
  };
  useEffect(() => {
    getMovies();
  }, [query]);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="class-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movies">
        {movies.map((movie) => (
          <Movie
            key={movie.show.id}
            title={movie.show.name}
            language={movie.show.language}
            image={movie.show.image.medium}
            genre={movie.show.genres}
          />
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
