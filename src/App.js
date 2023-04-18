import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from "./components/pages/Search/About";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Login/Signup";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
