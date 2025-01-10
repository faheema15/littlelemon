import React, { useState } from 'react';
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
import { Routes, Route } from 'react-router-dom';

function App() {
    // State to store the logged-in user's name
    const [loggedInName, setLoggedInName] = useState("");

    return (
        <>
            {/* Pass loggedInName to Nav for displaying "Hi, [name]!" */}
            <Nav loggedInName={loggedInName} />

            <Routes>
                {/* Home Page: Nav + Header + Menu + Footer */}
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

                {/* About Page: Nav + Header + Footer */}
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

                {/* Other Pages: Nav + Footer */}
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
                            {/* Pass setLoggedInName to Login for updating the user's name */}
                            <Login setLoggedInName={setLoggedInName} />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
