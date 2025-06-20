import React from 'react';
import { Nav } from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import { Footer } from '../Components/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='min-h-screen'>
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;