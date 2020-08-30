import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home.jsx';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/Details" component={Details} />
          <Route path="/AddMovie" component={AddMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
