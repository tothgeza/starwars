import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "../src/style.scss";
import People from "./People";
import Planet from "./Planet";

function App() {
  return (
    <Router>
      <div className="border d-sm-flex flex-column h-100">
        <div class="twinkling"></div>
        <Nav />
        <Switch>
          <Route path="/people" component={People} />
          <Route path="/planet" component={Planet} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
