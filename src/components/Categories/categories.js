import React from "react";
import "../../App.css"
import {Button} from "carbon-components-react";

const Categories = () => {
    return (
        <div className="intro-comp">
            <h1 className="landing-page__heading">Movie By Genre</h1>
            <p> In here you can search movies by category
            </p>
            <Button className="btn">See more...</Button>
        </div>
    );
};
export default Categories;
