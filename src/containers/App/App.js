import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home';
import './App.scss';

const Highscore = lazy(() => import('../Highscore'));
const Game = lazy(() => import('../Game'));

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/highscores" component={Highscore} />
                        <Route path="/play" component={Game} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
