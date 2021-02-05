import React from 'react';
import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Jiaqi Xiong</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer />
    </Box>
  );
}
