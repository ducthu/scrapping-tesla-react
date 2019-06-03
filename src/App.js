import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/home.component";
import Annonces from "./components/annonces.component";
import AnnonceDetail from "./components/AnnonceDetail.component";

const ApiUrl = "http://localhost:4000/api";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <div className="menu">
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/annonces">Annonces</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/annonces" component={Annonces} />
          <Route exact path="/annonce/:id" component={AnnonceDetail} />
        </div>
      </div>
    );
  }
}

export default App;
