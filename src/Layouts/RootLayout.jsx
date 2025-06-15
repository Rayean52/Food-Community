import React from 'react';
import { Nav } from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import { Footer } from '../Components/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;