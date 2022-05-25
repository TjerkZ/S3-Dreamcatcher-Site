import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';

function App() {
  return (
    <Router>
      <div>
        {/* TODO navbar */}
        <div>
            <h1>test</h1>
            <Routes>
              <Route path="" exact element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
