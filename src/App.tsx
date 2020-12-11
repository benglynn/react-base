import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/another">Another page</Link>
          </nav>
          <Switch>
            <Route path="/another">
              <h1>Another page!</h1>
            </Route>
            <Route path="/">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
