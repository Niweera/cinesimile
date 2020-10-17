import { Search } from "carbon-components-react";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import mockMovies from "../../data/mockmovies.json";
import SearchResultsTitle from "../SearchResultsTitle";
import { MovieCard } from "../Movie_Cards";

const SearchBox = () => {
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const debounced = useDebouncedCallback((value, setResults) => {
    let results = [];
    if (value) {
      for (let movie of mockMovies) {
        if (movie.title.toLowerCase().startsWith(value)) {
          results.push(movie);
        }
      }
    }

    setResults(results);
  }, 500);

  return (
    <div className="searchBox">
      <Search
        onChange={(e) => debounced.callback(e.target.value, setResults)}
        id="search-1"
        placeHolderText="Search a movie"
      />
      <div>
        {results.map((x) => {
          return (
            <h4 id={x.id} onClick={() => setSelectedMovie(x)}>
              {x.title}
            </h4>
          );
        })}
      </div>

      {selectedMovie && <SearchResultsTitle title={selectedMovie.title} />}

      <div style={{ display: "flex" }}>
        {selectedMovie &&
          results.map((x) => {
            return (
              <MovieCard
                style={{ width: "20%" }}
                title={x.title}
                description={x.description}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SearchBox;
