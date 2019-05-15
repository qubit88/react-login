import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
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
                <Link to="/news/">News</Link>
              </li>
              <li>
                <Link to="/profile/">Profile</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/news/" component={News} />
          <Route path="/profile/" component={Profile} />
        </div>
      </Router>
    </div>
  );
}

export default App;
