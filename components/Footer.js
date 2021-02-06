import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

function Copyright() {
  const formatter = new Intl.DateTimeFormat('en-us', { month: 'short' });
  let newDate = new Date();
  const month = formatter.format(newDate);

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Last Updated: {month} {newDate.getFullYear()}
      <br />
      {'Copyright © '}
      <Link color="inherit" href="https://jiaqixiong.netlify.com/">
        Jiaqi Xiong
      </Link>{' '}
      . All rights reserved. Proudly built with&nbsp;
      <Link color="inherit" href="https://nextjs.org/">Next.js</Link> and&nbsp; 
      <Link color="inherit" href="https://material-ui.com/">Material-UI</Link>, hosted with&nbsp;
      <Link color="inherit" href="https://www.netlify.com/">Netlify</Link>.
    </Typography>
  );
}

export default function Footer() {
  const useStyles = {
    wrapper: {
      width: '100vw',
      height: '210px',
      bottom: 0,
      position: 'absolute',
      backgroundImage: 'url("/images/hero.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '25px',
      paddingBottom: '25px',
    },
    footer: {
      width: '50vw',
      left: '25%', 
      position: 'relative', 
      backgroundColor: '#dfefeb88',
      borderRadius: '25px',
    }
  };

  return (
    <Box style={useStyles.wrapper}>
      <Box style={useStyles.footer}>
        <Copyright />
      </Box>
    </Box>
  );
}
