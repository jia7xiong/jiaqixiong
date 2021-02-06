import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PrimaryLink from '../components/PrimaryLink';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100vw',
    maxHeight: '100vh',
    top: '0',
    position: 'fixed',
    backgroundColor: theme.palette.primary.main,
    paddingTop: '25px',
    paddingBottom: '25px',
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    width: '50vw',
    left: '25%', 
    position: 'relative', 
  },
  mainLink: {
    color: '#3f3630',
    // color: theme.palette.primary.dark,
    fontWeight: 600,
    fontSize: '1.5rem',
  },
  sectionLink: {
    fontSize: '1rem',
  },
}));

const sections = [
  { title: 'Projects', url: '#projects' },
  { title: 'About Me', url: '#about-me' },
];

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} zIndex='drawer'> 
      <Box className={classes.header}>
        <Grid 
          container 
          spacing={3}
          alignItems='center'
        >
          <Grid item>
            <PrimaryLink
              href={''}
              className={classes.mainLink}
            >
                +7ʕ•ᴥ•ʔ
            </PrimaryLink>
          </Grid>
            {sections.map((section) => (
              <Grid item key={section.title}>
                <Link
                  color="textPrimary"
                  href={section.url}
                  underline='none'
                  className={classes.sectionLink}
                >
                  {section.title}
                </Link>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
