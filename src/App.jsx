import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Ton from './components/TypesOfNews/Ton';


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route  path="/" element={<News key='general' pagesize={5} category={'general'} country={'us'} />} />
            <Route  path="/home" element={<News key='general' pagesize={5} category={'general'} country={'us'} />} />
            <Route path="/types of news" element={<Ton key='typesofnews'/>} />
            <Route  path="/business" element={<News key='business' pagesize={5} category={'business'} country={'us'} />} />
            <Route  path="/technology" element={<News key='technology' pagesize={5} category={'technology'} country={'us'} />} />
            {/* <Route path="/aboutme" element={<Aboutme />} /> */}
          </Routes>
        </Router>
      </div>
    );
  }
}
