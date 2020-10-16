import { Search } from "carbon-components-react";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import mockMovies from "../../data/mockmovies.json";
import SearchResultsTitle from "../SearchResultsTitle";

const SearchBox = () => {
  const [query, setQuery] = useState([]);

  const debounced = useDebouncedCallback((value, setQuery) => {
    let array = [];
    if (value) {
      for (let movie of mockMovies) {
        if (movie.title.toLowerCase().startsWith(value)) {
          array.push(movie);
        }
      }
    }
    setQuery(array);
  }, 500);

  return (
    <div className="searchBox">
      <Search
        onChange={(e) => debounced.callback(e.target.value, setQuery)}
        id="search-1"
        placeHolderText="Search a movie"
      />
      {query.map(({ id, title }) => (
        <div key={id}>
          <SearchResultsTitle title={title} />
        </div>
      ))}
    </div>
  );
};

export default SearchBox;
