import React from 'react';
import './App.css';
import NavBar from "./components/nav-bar/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <NavBar/>
            <Outlet />
            <Footer />
        </>
    );
}

export default App;