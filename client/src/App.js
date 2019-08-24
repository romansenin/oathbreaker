import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Wrapper from "./components/Wrapper";
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
      allegiance: undefined,
      player: undefined,
      enemy: undefined
    };
    this.setAllegiance = this.setAllegiance.bind(this);
    this.charClicked = this.charClicked.bind(this);
  }

  componentDidMount() {
    axios.get("/session").then(user => {
      this.setState({ user: user.data });
      setTimeout(() => {
        this.setState({ spinner: false });
      }, 500);
    });
  }

  setAllegiance(allegiance) {
    this.setState({ allegiance });
  }

  charClicked(id) {
    const enemyId =
      id <= 5
        ? Math.floor(Math.random() * (11 - 6) + 6)
        : Math.floor(Math.random() * (6 - 1) + 1);

    this.setState({
      player: id,
      enemy: enemyId
    });
  }

  render() {
    return (
      <Router>
        <div>
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
                  path="/allegiance"
                  render={() => (
                    <ChooseAllegiance
                      user={this.state.user}
                      setAllegiance={this.setAllegiance}
                    />
                  )}
                />
                <Route
                  exact
                  path="/character"
                  render={() => (
                    <CharacterSelection
                      user={this.state.user}
                      clicked={this.charClicked}
                      allegiance={this.state.allegiance}
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
