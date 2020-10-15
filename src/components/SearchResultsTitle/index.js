import React from "react";
import "../../App.css";

const SearchResultsTitle = ({ title }) => {
  return <h2 className="search-results__title">Movies like: {title}</h2>;
};

export default SearchResultsTitle;
