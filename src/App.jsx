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
            <Route path="/" element={<News key='general' pagesize={5} category={'general'} country={'us'} />} />
            <Route path="/home" element={<News key='general' pagesize={5} category={'general'} country={'us'} />} />

            <Route path="/types of news" element={<Ton key='typesofnews' />} />
            <Route path="/sports" element={<News key='sports' pagesize={5} category={'sports'} country={'us'} />} />
            <Route path="/science" element={<News key='science' pagesize={5} category={'science'} country={'us'} />} />
            <Route path="/health" element={<News key='health' pagesize={5} category={'health'} country={'us'} />} />
            <Route path="/entertainment" element={<News key='entertainment' pagesize={5} category={'entertainment'} country={'us'} />} />

            <Route path="/business" element={<News key='business' pagesize={5} category={'business'} country={'us'} />} />
            <Route path="/technology" element={<News key='technology' pagesize={5} category={'technology'} country={'us'} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
