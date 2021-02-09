import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    bottom: 0,
    padding: '25px',
    backgroundImage: 'url("/images/hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 1099,
  },
  footer: {
    maxWidth: '840px',
    margin: 'auto',
    paddingTop: '15px',
    paddingBottom: '15px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '25px',
    opacity: 0.8,
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.footer}>
        <Copyright />
      </div>
    </div>
  );
}
