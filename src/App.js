import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import { useState } from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
       <Route path="/team/:idTeam">
         <TeamDetails></TeamDetails>
       </Route>

      </Switch>
    </Router>
  );
}

export default App;
