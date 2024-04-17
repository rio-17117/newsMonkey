import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Newsitem from './components/News/Newsitem';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <News/>
      </div>
    )
  }
}
