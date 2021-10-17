import React from "react";

export const MovieCard = ({ title, description }) => {
  return (
    <div className="search-results__card">
      <img alt='dummyimage' src="https://dummyimage.com/320x170/bfbfbf/fff" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Go somewhere</button>
    </div>
  );
};
