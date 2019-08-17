import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ChooseAllegiance from "./pages/ChooseAllegiance";
import CharacterSelection from "./pages/CharacterSelection";
import BattlePage from "./pages/BattlePage";

const axios = require("axios");

const Public = () => <h3>Public Content</h3>;

const Protected = () => <h3>Protected Content</h3>;

const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }
  login = () => {
    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      this.props.history.push(from.pathname);
    }
    return (
      <div>
        <p>Please, you need to be authenticated to to view this content</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuthCentralState.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const AuthButton = withRouter(({ history }) =>
  fakeAuthCentralState.isAuthenticated ? (
    <p>
      Welcome to this amazing content!{" "}
      <button
        onClick={() => {
          fakeAuthCentralState.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    axios.get("/session").then(user => {
      console.log("fetched user data:", user.data);
      this.setState({ user: user.data });
    });
  }

  render() {
    return (
      <Router>
        <div>
          {/* <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Content</Link>
            </li>
            <li>
              <Link to="/protected">Protected Content</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={withRouter(Login)} />
          <ProtectedRoute path="/protected" component={Protected} /> */}
          {/* <Navbar /> */}
          <Route exact path="/" render={() => <LandingPage />} />
          {<Route exact path="/login" render={() => <LoginPage />} />}
          <Route
            exact
            path="/chooseAllegiance"
            render={() => <ChooseAllegiance user={this.state.user} />}
          />
          <Route
            exact
            path="/selectCharacter"
            render={() => <CharacterSelection user={this.state.user} />}
          />
          <Route
            exact
            path="/battle"
            render={() => <BattlePage user={this.state.user} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';
// import './App.css';

// class App extends Component {
//   goTo(route) {
//     this.props.history.replace(`/${route}`)
//   }

//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   componentDidMount() {
//     const { renewSession } = this.props.auth;

//     if (localStorage.getItem('isLoggedIn') === 'true') {
//       renewSession();
//     }
//   }

//   render() {
//     const { isAuthenticated } = this.props.auth;

//     return (
//       <div>
//         <Navbar fluid>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">Auth0 - React</a>
//             </Navbar.Brand>
//             <Button
//               bsStyle="primary"
//               className="btn-margin"
//               onClick={this.goTo.bind(this, 'home')}
//             >
//               Home
//             </Button>
//             {
//               !isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.login.bind(this)}
//                   >
//                     Log In
//                   </Button>
//                 )
//             }
//             {
//               isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.logout.bind(this)}
//                   >
//                     Log Out
//                   </Button>
//                 )
//             }
//           </Navbar.Header>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default App;