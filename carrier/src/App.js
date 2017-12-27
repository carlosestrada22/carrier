import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/js/cards.js';
import 'materialize-css/js/animation.js';
import 'materialize-css/js/dropdown.js';
import 'materialize-css/js/sideNav.js';
import $ from 'jquery'

import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar $={$}/>
        <div className="main"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
