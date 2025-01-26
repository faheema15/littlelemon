import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Header2 from './components/header2';
import Footer from './components/Footer';
import About from './pages/about';
import Menulist from './pages/menulist';
import Reservations from './pages/reservations';
import OrderOnline from './pages/orderonline';
import Login from './pages/login';

function App() {
    const [loggedInName, setLoggedInName] = useState("");

    return (
        <BrowserRouter basename="/littlelemon">
            <Nav loggedInName={loggedInName} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Header2 />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <>
                            <Header />
                            <About />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/menu"
                    element={
                        <>
                            <Menulist />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/reservations"
                    element={
                        <>
                            <Reservations />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/orderonline"
                    element={
                        <>
                            <OrderOnline />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <>
                            <Login setLoggedInName={setLoggedInName} />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
