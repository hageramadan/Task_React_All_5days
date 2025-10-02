import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import EmailFormCompnent from "./login/SignIn";
import RegisterFormCompnent from "./register/Register";
import Nav from "./Navbar/Navbar";
import Movie from "./Movie/Movie";
import Watchlist from "./WatchList/WatchList";


export default function App() {
  return (
    <Router>
      <Nav /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={RegisterFormCompnent} />
        <Route path="/contact" component={EmailFormCompnent} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/movie/:id" component={Movie} />

      </Switch>
    </Router>
  );
}
