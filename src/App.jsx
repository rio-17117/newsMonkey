import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import NavBar from './components/Navbar/NavBar';
import News from './components/News/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* <News/> */}
        </div>
      </Router>
    );
  }
}
