import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const hatsPage = () => <h1>this is hats page</h1>;
const sneakersPage = () => <h1>this is sneakers page</h1>;
const jacketsPage = () => <h1>this is jackets page</h1>;
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={hatsPage} />
      <Route path="/sneakers" component={sneakersPage} />
      <Route path="/jackets" component={jacketsPage} />
    </Switch>
  );
}

export default App;
