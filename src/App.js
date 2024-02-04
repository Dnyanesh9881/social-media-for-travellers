
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Navbar from './components/Navbar';
import "./App.css"

const App = () => {
  return (<div>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/item/:id" element={<PostDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
    
  );
};

export default App;
