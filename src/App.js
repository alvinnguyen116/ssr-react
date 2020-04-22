import React from 'react';
import About from './about/about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/about"}>
          <About/>
        </Route>
        <Route path={["/:name","/"]}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
