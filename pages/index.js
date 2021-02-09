import React from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Projects from '../components/Project/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <Footer />
    </>
  );
}
