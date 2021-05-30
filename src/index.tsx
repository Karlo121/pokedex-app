import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './components/Pokedex';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/gen-one'>
            <Pokedex />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
