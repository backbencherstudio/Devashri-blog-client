import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Layout = () => {
    return (
        <div className='bg-[#F9F6F5]'>
            <NavBar></NavBar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;