import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PrimaryLink from '../components/PrimaryLink';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    minHeight: '88vh',
    backgroundColor: theme.palette.secondary.main,
    padding: '25px',
  },
  wrapper: {
    maxWidth: '840px',
    minHeight: '88vh',
    margin: 'auto',
  },
  introductionBlock: {
    width:"100%",
    wordWrap: 'break-word',
  },
  introduction: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '75px', 
    },
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>   
      <Grid container className={classes.wrapper} justify='space-evenly' direction='column'>
        <Grid item>
          <Typography component="h1" variant="h4" gutterBottom>
            ➜ helloWorld()
          </Typography>
        
          <Grid container
            alignItems='center'
            justify='center'
            spacing={2}
          >
            <Grid item md={3}>
                <Avatar alt="Jiaqi Xiong" src="images/profile.jpg" style={{ width: '200px', height: '200px'}}/>
            </Grid>
            
            <Grid item md={9} className={classes.introductionBlock}>
              <div className={classes.introduction}>
                <Typography variant="h4" component='h2' paragraph>
                  Hi, I'm Jiaqi Xiong&nbsp; 
                  <PrimaryLink href='https://github.com/jia7xiong'>(@jia7xiong)</PrimaryLink>
                </Typography>
                <Typography variant="body1" paragraph>
                  Upcoming engineer interested in software development
                </Typography>
                <Typography variant="body1" paragraph>
                  Pursuing a Master's degree at&nbsp; 
                  <PrimaryLink href='https://viterbischool.usc.edu/'>University of Southern California</PrimaryLink>
                </Typography>
                <Typography variant="body2" paragraph>
                  Every developer creates a brain-computer interface for his/her databases.
                </Typography>
                <Typography variant="body2" paragraph>
                  Curiosity &middot;  Learn &middot; Practice &middot; Contribute
                </Typography>
              </div>
            </Grid>
            
          </Grid>
        </Grid>

        <Grid item>
          <Typography component="h1" variant="h4" gutterBottom>
            ➜ getInTouch()
          </Typography>

          <Grid container alignItems='flex-end' justify='flex-start' spacing={5}>
            <Grid item xs={4}/>
            <Grid item>
              <PrimaryLink href='https://drive.google.com/file/d/1qfQDdf5uCDUWULXxlKZl4DXr-xsca30O/view?usp=sharing' iconType='paper' />
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
    </div>
  );
}
