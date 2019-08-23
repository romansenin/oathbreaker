import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ChooseAllegiance from "./pages/ChooseAllegiance";
import CharacterSelection from "./pages/CharacterSelection";
import BattlePage from "./pages/BattlePage";
import FontAwesome from "react-fontawesome";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      spinner: true,
      player: 1,
      enemy: 2
    };
  }

  componentDidMount() {
    axios.get("/session").then(user => {
      console.log("user:", user.data);
      this.setState({ user: user.data });
      setTimeout(() => {
        this.setState({ spinner: false });
      }, 1000);
    });
  }

  charClicked = id => {
    var enemyId = id;

    while (enemyId === id) {
      enemyId = Math.floor(Math.random() * 10);
    }

    this.setState({
      player: id,
      enemy: enemyId
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            {this.state.spinner ? (
              <FontAwesome
                className="spinner"
                name="spinner"
                size="3x"
                spin
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            ) : (
              <div className="router-wrapper">
                <Route exact path="/" render={() => <LandingPage />} />
                <Route exact path="/login" render={() => <LoginPage />} />
                <Route exact path="/signup" render={() => <SignUp />} />
                <Route
                  exact
                  path="/chooseAllegiance"
                  render={() => (
                    <ChooseAllegiance
                      user={this.state.user}
                      toggleFog={this.toggleFog}
                    />
                  )}
                />
                <Route
                  exact
                  path="/selectCharacter"
                  render={() => (
                    <CharacterSelection
                      user={this.state.user}
                      clicked={this.charClicked}
                      history={this.history}
                    />
                  )}
                />
                <Route
                  exact
                  path="/battle"
                  render={() => (
                    <BattlePage
                      user={this.state.user}
                      player={this.state.player}
                      enemy={this.state.enemy}
                    />
                  )}
                />
              </div>
            )}
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
