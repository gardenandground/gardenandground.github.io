import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/home';
import Gallery from './components/gallery/gallery';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home } />
          <Route path="/gallery" component={ Gallery } />
        </div>
      </Router>
    );
  }
}
