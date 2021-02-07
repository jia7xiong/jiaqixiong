import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PrimaryLink from '../components/PrimaryLink';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    backgroundColor: theme.palette.secondary.main,
    padding: '25px',
    // flexGrow: 1,
  },
  wrapper: {
    [theme.breakpoints.up('md')]:{
      width: '840px',
      margin: 'auto',
    },
    [theme.breakpoints.down('md')]:{
      margin: 0,
    }
  },
  hero: {
    // fontFamily: '',
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <Box className={classes.root} id='about-me'>   
      <Grid container spacing={3} className={classes.wrapper}>
        <Grid item xs={12} style={{padding:'0'}}>
          <Typography component="h3" variant="h6" gutterBottom>
            ➜ helloWorld()
          </Typography>
        </Grid>

        <Grid item xs={12} style={{padding:'0'}}>
          <Grid container
            alignItems='center'
            justify='center'
            spacing={10}
          >
            <Grid item>
              {/* <Grid container justify='center'> */}
                {<img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={'images/profile.jpg'} alt="Avatar"/>}
              {/* </Grid> */}
            </Grid>

            <Grid item xs={8}>
              <Grid item>
                <Typography variant="h4" paragraph className={classes.hero}>
                  Hi, I'm Jiaqi Xiong&nbsp; 
                  <PrimaryLink href='https://github.com/jia7xiong'>(@jia7xiong)</PrimaryLink>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Upcoming engineer interested in software development
                </Typography>
                <Typography variant="body1" paragraph>
                  Currently pursuing a Master's degree at&nbsp; 
                  <PrimaryLink href='https://viterbischool.usc.edu/'>University of Southern California</PrimaryLink>
                </Typography>
                <Typography variant="body2" paragraph>
                  Every developer creates a brain-computer interface for his/her databases.
                </Typography>
                <Typography variant="body2" paragraph>
                  Curiosity &middot;  Learn &middot; Practice &middot; Contribute
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{padding:'0', marginTop: '25px'}}>
          <Typography component="h3" variant="h6" gutterBottom>
            ➜ getInTouch()
          </Typography>
        </Grid>

        <Grid item xs={12} style={{padding:'0'}}>
          <Grid container alignItems='flex-end' justify='flex-start' spacing={5}>
            <Grid item xs={4}/>
            <Grid item>
              <PrimaryLink href='resume.pdf' iconType='paper' />
            </Grid>
            <Grid item>
              <PrimaryLink iconType='github' />
            </Grid>
            <Grid item>
              <PrimaryLink iconType='linkedin' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
