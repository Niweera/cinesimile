import React from "react";
import SearchBox from "../SearchBox";
import IntroComp from "./introduction_component";
import "../../App.css"

const Home = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--offset-lg-1 bx--col-lg-14">
          <IntroComp/>
          <SearchBox className="search-box" />
        </div>
      </div>
    </div>
  );
};

export default Home;
