
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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
        <Router>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>

       
        </Router>
        
      </div>
    </div>
  )
};

export default App;
