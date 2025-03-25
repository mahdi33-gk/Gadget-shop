import React from 'react';
import Navbar from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;