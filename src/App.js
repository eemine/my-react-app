import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Cumbatron, Footer } from "./components";
import Home from "./pages/home";
import SignIn from "./pages/signIn";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Cumbatron />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
