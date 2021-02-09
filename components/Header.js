import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: 'none',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  toolBar: {  
    backgroundColor: theme.palette.primary.main,
    width: '840px',
    margin: 'auto',
  },
  homeButton: {
    marginRight: theme.spacing(2),
    padding: 0,
    // color: '#73b9a7',
    // color: '#616d6a',
    color: '#477267',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  sectionButton: {
    // width:'100%',
    fontSize: '1rem',
    fontFamily: 'BodoniFLF',
    fontWeight: 'bold',
  },
}));

const sections = [
  { title: 'Projects', url: '/#projects' },
  { title: 'About Me', url: '/#about-me' },
];

export default function Header() {
 
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={classes.root}>
          <Toolbar disableGutters className={classes.toolBar}>
            <Grid container alignItems='baseline'>
              <Button 
                href={'/'}
                className={classes.homeButton}
                disableRipple   
              >
                +7ʕ•ᴥ•ʔ
              </Button>
              {sections.map((section) => (
                <Button
                  key={section.title}
                  href={section.url}
                  className={classes.sectionButton}
                  // disableElevation={false}
                >
                  {section.title}
                </Button>
              ))}
            </Grid >
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar className={classes.root} id='about-me'/>
    </>
  );
}
