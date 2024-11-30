import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './Todo';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import './Todo.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Todo List</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
