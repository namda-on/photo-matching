import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./shared/global.css";
import FilterPage from "./pages/filter";
import MainPage from "./pages/main";
import SearchPage from "./pages/search";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/filter">
          <FilterPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
