import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PrimaryLink from '../components/PrimaryLink';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100vw',
    marginTop: '84px',
    backgroundColor: theme.palette.secondary.main,
    paddingTop: '25px',
    paddingBottom: '25px',
  },
  about: {
    width: '50vw',
    left: '25%', 
    position: 'relative', 
    // backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexGrow: 1,
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>   
      <Box className={classes.about} id="about-me">
        <Grid container
          alignItems='center'
          justify='space-between'
        >
          <Grid item xs={12}>
            <Typography component="h1" variant="h6" color="inherit" gutterBottom>
              ➜ helloWorld()
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Grid container justify = "center">
              {<img style={{ display: 'inline-block', width: '50%', height: '50%' ,borderRadius: '50%' }} src={'images/profile.jpg'} alt="Avatar"/>}
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <Grid item>
              <Typography variant="h4" color="inherit" paragraph>
                Hi, I'm Jiaqi Xiong&nbsp; 
                <PrimaryLink href='https://github.com/jia7xiong'>(@jia7xiong)</PrimaryLink>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="inherit" paragraph>
                Upcoming engineer interested in software development
              </Typography>
              <Typography variant="body1" color="inherit" paragraph>
                Currently pursuing a Master's degree at&nbsp; 
                <PrimaryLink href='https://viterbischool.usc.edu/'>University of Southern California</PrimaryLink>
              </Typography>
              <Typography variant="body1" color="inherit" paragraph>
                Every developer creates a brain-computer interface for his/her databases.
              </Typography>
              <Typography variant="body2" color="inherit" paragraph>
                Curiosity &middot;  Learn &middot; Practice &middot; Share
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography component="h1" variant="h6" color="inherit" gutterBottom>
              ➜ getInTouch()
            </Typography>
          </Grid>
          <Grid container justify='center' alignItems='flex-end'>
            <Grid item xs={1}>
              <PrimaryLink href='resume.pdf' iconType='paper' />
            </Grid>
            <Grid item xs={1}>
              <PrimaryLink iconType='linkedin' />
            </Grid>
            <Grid item xs={1}>
              <PrimaryLink iconType='github' />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
