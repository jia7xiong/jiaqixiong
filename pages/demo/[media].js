import React from 'react';
import Header from '../../components/Header';
import Media from '../../components/Media';
import Footer from '../../components/Footer';

export default function Demo({path, width, height}) {
  return (
    <>
      <Header />
      <Media path={path} width={width} height={height}/>
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
    const name = context.params.media;
    let path, width, height;

    switch (name) {
      case 'oracle-of-blade':
        path = 'https://drive.google.com/file/d/1TTaifS-L_tEMxs99S-5QHviuLO53KAVM/preview';
        width = '640';
        height = '480';
        break;
      case 'nba-game-performance':
        path = 'https://www.youtube.com/embed/9iNS43uMiOM?autoplay=1&mute=1';
        width = '560';
        height = '315';
        break;
      case 'minijava-compiler':
        path = 'https://onedrive.live.com/embed?cid=506315F1BB2058B5&resid=506315F1BB2058B5%214174&authkey=AHU0J4bYyMBjaFQ&em=2';
        width = '402';
        height = '327';
        break;
      default:
        break;
    } 

    return {
      props: { path, width, height },
    }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: {media: 'oracle-of-blade'} },
      { params: {media: 'nba-game-performance'} },
      { params: {media: 'minijava-compiler'} },
    ],
    fallback: false 
  };
}