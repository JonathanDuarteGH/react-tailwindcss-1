import React from 'react';
import Header from '../components/Header';
import Service from '../components/Service';
import Projects from '../components/Projects';
import About from '../components/About';
import Ct2a from '../components/Cta2';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Service />
      <Projects />
      <About />
      <Ct2a />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout;
