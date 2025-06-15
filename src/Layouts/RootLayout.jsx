import React from 'react';
import { Nav } from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import { Footer } from '../Components/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col">
            <Nav></Nav>
            <div className='flex-grow w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default RootLayout;