import React from "react";

export const MovieCard = ({ title, description }) => {
  return (
    <div className="search-results__card">
      <img
        className="search-results__card-poster"
        alt="movie poster"
        src="https://dummyimage.com/320x170/bfbfbf/fff"
      />
      <h3 className="search-results__card-title">{title}</h3>
      <p className="search-results__card-description">{description}</p>
      <button className="search-results__card-button">Go somewhere</button>
    </div>
  );
};
