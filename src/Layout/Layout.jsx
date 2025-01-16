import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
};

export default Layout;