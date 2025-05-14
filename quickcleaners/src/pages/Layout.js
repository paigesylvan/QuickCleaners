import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='page-container'>
        <Header/>
        <Outlet/>

    </div>
  )
};

export default Layout;