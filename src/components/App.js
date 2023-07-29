
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import './../styles/App.css';
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>

        </Routes>
      </div>
    </div>
  )
};

export default App;
