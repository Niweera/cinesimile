import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MainHeader from "./components/Header";
import { Content } from "carbon-components-react";

const Routes = () => {
  return (
    <>
      <MainHeader />
      <Content>
        <Router>
          <Switch>
            <Route exact path={"/"} render={(props) => <Home {...props} />} />
            <Route exact path={"*"} component={Home} />
          </Switch>
        </Router>
      </Content>
    </>
  );
};

export default Routes;
