import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Home from "../Home";
import "./App.css";

const Highscore = lazy(() => import("../Highscore"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/highscores" component={Highscore} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
