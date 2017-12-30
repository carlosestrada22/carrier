import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/js/cards.js';
import 'materialize-css/js/animation.js';
import 'materialize-css/js/dropdown.js';
import 'materialize-css/js/sideNav.js';
import './palette.css'
import './App.css';
//views
// import Layout from './views/layout.js'
import AboutUs from './views/about-us.js'
import Carriers from './views/carriers.js'
import ContactUs from './views/contact-us.js'
import Enterprise from './views/enterprise.js'
import Packages from './views/packages.js'
import PublicSector from './views/public-sector.js'
import Home from './views/home.js';

import FixedButton from './components/fixed-button/fixed-button.js'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'
import $ from 'jquery'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar $={$} />
            <div className="main">
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/carriers" component={Carriers} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/enterprise" component={Enterprise} />
              <Route path="/packages" component={Packages} />
              <Route path="/public-sector" component={PublicSector} />
            </div>
            <FixedButton />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
