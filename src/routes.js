import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import MainHeader from "./components/Header";
import NavBar from "./components/Navbar/index";
import { Content } from "carbon-components-react";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs/contact_us";
import NotFound from "./components/NotFound/not_found";
import Categories from "./components/Categories/categories";
import News from "./components/News/news";

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
              <Route exact path={"/categories"} component={Categories} />
              <Route exact path={"/news"} component={News} />
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
