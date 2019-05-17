import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Profile from "./Profile";
import News from "./News";
import Home from "./Home";
import Login from "./Login";
import LoginContext from "./LoginContext";
import Navigation from "./Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logIn = () => {
      this.setState(state => ({
        loggedIn: true
      }));
      localStorage.setItem("loggedIn", true);
    };

    this.logOut = () => {
      this.setState(state => ({
        loggedIn: false
      }));

      localStorage.setItem("loggedIn", false);
      localStorage.setItem("username", "");
    };

    this.setUsername = username => {
      this.setState(state => ({
        username
      }));

      localStorage.setItem("username", JSON.stringify(username));
      console.log(username);
    };
    this.state = {
      loggedIn: false,
      logIn: this.logIn,
      logOut: this.logOut,
      username: "",
      setUsername: this.setUsername
    };
  }

  componentDidMount() {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    const username = localStorage.getItem("username") || "";
    // console.log(localStorage.getItem("username"), "username");
    // const username = "";

    this.setState({ loggedIn, username });
  }

  render() {
    const { loggedIn, logIn, logOut, username, setUsername } = this.state;
    return (
      <div className="App">
        <Router>
          <LoginContext.Provider
            value={{ loggedIn, logIn, logOut, username, setUsername }}
          >
            <Navigation />
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/login" component={Login} />
              <Route
                path="/profile/"
                render={() =>
                  this.state.loggedIn ? <Profile /> : <Redirect to="/login" />
                }
              />
            </div>
          </LoginContext.Provider>
        </Router>
      </div>
    );
  }
}

export default App;
