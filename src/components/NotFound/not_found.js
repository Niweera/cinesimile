import React from "react";

const NotFound = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--offset-lg-1 bx--col-lg-14">
          <html>
              <h1>404</h1>
              <h2>Page not found</h2>
              <img
              className="Page_not_found"
              alt="Page not found"
              src="https://i.imgur.com/qIufhof.png"
              />
          </html>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
