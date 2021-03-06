import React from "react";
import "bootswatch/dist/lumen/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
