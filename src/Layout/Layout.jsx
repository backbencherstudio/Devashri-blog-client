import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Layout = () => {

    const location = useLocation()

     // Define paths where the footer should not be displayed0
    
     const noFooter = ["/protectedTwo" ,"/protected"]

    return (
        <div className='bg-[#F9F6F5]'>
            <NavBar></NavBar>
            <Outlet />
            {!noFooter.includes(location.pathname) && <Footer></Footer>}           
        </div>
    );
};

export default Layout;