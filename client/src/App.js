import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ChooseAllegiance from "./pages/ChooseAllegiance";
import CharacterSelection from "./pages/CharacterSelection";
import BattlePage from "./pages/BattlePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route
          exact
          path="/chooseAllegiance"
          render={() => <ChooseAllegiance />}
        />
        <Route
          exact
          path="/selectCharacter"
          render={() => <CharacterSelection />}
        />
        <Route exact path="/battle" render={() => <BattlePage />} />
      </Router>
    );
  }
}

export default App;
