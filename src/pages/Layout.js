import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from './HomeContent.js'

const Layout = () => {
  return (
    <div className='page-container'>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
};

export default Layout;