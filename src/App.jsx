import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div style={{paddingTop:"80px"}}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
