import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import MainHeader from "./components/Header";
import NavBar from "./components/Navbar/index";
import { Content } from "carbon-components-react";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs/contact_us";
import NotFound from "./components/NotFound/not_found";

const Routes = () => {
  return (
    <>
      {/* <MainHeader /> */}
      <NavBar />
      <Content>
        <Router>
          <Switch>
            <Route exact path={"/"} render={(props) => <Home {...props} />} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/contact"} component={ContactUs} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Content>
      <Footer />
    </>
  );
};

export default Routes;
