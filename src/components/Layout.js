import React from 'react';
import Header from '../components/Header';
import Service from '../components/Service';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Ct2a from '../components/Cta2';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Service />
      <Portfolio />
      <About />
      <Ct2a />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout;
