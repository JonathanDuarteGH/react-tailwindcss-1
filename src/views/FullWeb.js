import React from 'react';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout'
import FooterBottom from '../components/FooterBottom';

export default function FullWeb({ children }) {
  return (
    <>
      <NavBar />
      <Layout />
      <FooterBottom />
    </>
  );
};