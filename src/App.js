import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbars from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Navbars />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
            </Routes>
            
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default App

