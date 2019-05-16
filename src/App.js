import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Profile from "./Profile";
import News from "./News";
import Home from "./Home";
import Login from "./Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  componentDidMount() {
    const loggedIn = !!localStorage.getItem("loggedIn");

    this.setState({ loggedIn });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>

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
        </Router>
      </div>
    );
  }
}

export default App;
