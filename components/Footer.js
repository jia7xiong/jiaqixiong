import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

const useStyles = makeStyles((theme)=>({
  wrapper: {
    width: '100vw',
    // height: '210px',
    bottom: 0,
    position: 'fixed',
    padding: '25px',
    backgroundImage: 'url("/images/hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  footer: {
    [theme.breakpoints.up('md')]:{
      width: '840px',
      margin: 'auto',
    },
    paddingTop: '15px',
    paddingBottom: '15px',
    backgroundColor: '#dfefeb88',
    borderRadius: '25px',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} zIndex='1099'>
      <Box className={classes.footer}>
        <Copyright />
      </Box>
    </Box>
  );
}
