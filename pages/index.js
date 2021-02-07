import React from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
// import Project from '../components/projects/Project';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div style={{marginBottom: '210px'}}>
        <Landing />
        {/* <Project /> */}
      </div>
      <Footer />
    </>
  );
}
