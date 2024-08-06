import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './assets/css/style.css';
import SearchArea from './Pages/SearchArea';
import Analysis from './Pages/Analysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-area" element={<SearchArea />} />
        <Route path='/analysis' element={<Analysis/>}/>
      </Routes>
    </Router>
  );
}

export default App;
