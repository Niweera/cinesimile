import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import MainHeader from "./components/Header";
import NavBar from "./components/Navbar/index";
import { Content } from "carbon-components-react";
import Footer from "./components/Footer";

const Routes = () => {
  return (
    <>
      {/* <MainHeader /> */}
      < NavBar/>
      <Content>
        <Router>
          <Switch>
            <Route exact path={"/"} render={(props) => <Home {...props} />} />
            <Route exact path={"*"} component={Home} />
          </Switch>
        </Router>
      </Content>
      <Footer />
    </>
  );
};

export default Routes;
