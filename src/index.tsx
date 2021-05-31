import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './components/Pokedex/Pokedex';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/gen-one'>
            <Pokedex />
          </Route>
          <Route path='/gen-two'>
            <Pokedex />
          </Route>
          <Route path='/gen-three'>
            <Pokedex />
          </Route>
          <Route path='/gen-four'>
            <Pokedex />
          </Route>
          <Route path='/gen-five'>
            <Pokedex />
          </Route>
          <Route path='/gen-six'>
            <Pokedex />
          </Route>
          <Route path='/gen-seven'>
            <Pokedex />
          </Route>
          <Route exact path='/pokedex-app'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
