import React from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container my-3">
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/add" component={MovieForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
