import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Sidebar from './components/Navbar/Sidebar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <News pagesize={5} category={'technology'} country={'jp'}/>
        </div>
      </Router>
    );
  }
}
