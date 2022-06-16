import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Navigation from "./components/Navigation";
import Dream from "./views/Dream";
import Stats from "./views/Stats";

function App() {
  return (
    <Router>
      <div>
        {/* TODO navbar */}
        <div>
            <Navigation/>
            <Routes>
              <Route path="" exact element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/dreams" element={<Dream/>} />
              <Route path="/stats" element={<Stats/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
