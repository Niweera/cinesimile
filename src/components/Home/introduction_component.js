import React from "react";
import { Button } from 'carbon-components-react';

const IntroComp = () => {
  return (
    <div className="intro-comp">
      <h1 className="landing-page__heading">Hello, world!</h1>
      <p>Welcome to CineSmile. We are platform to find similar movies easily. 
        We use sophisticated machine learning models to find similarities between movies and provide you with close matches.
      </p>
      <Button>Learn more</Button>
    </div>
  );
};

export default IntroComp;