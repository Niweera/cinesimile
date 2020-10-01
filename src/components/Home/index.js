import React from "react";
import IntroComp from "./introduction_component";
import Similar from '../Similiar/Search';

const Home = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--offset-lg-1 bx--col-lg-14">
          <IntroComp/>
          <Similar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
