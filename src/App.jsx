import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Weather from './Weather';

import HelpPage from './pages/HelpPage';
import Stats from './pages/Stats';


function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Weather/>}/>
        <Route path="/help" element={<HelpPage/>}/>
        <Route path="/stat" element={<Stats/>}/>
      </Routes>
      <Link to="/help">Help</Link>
      <Link to="/stat">Stat</Link>
    </div>

  );
}

export default App;
