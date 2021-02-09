import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Project from './Project';

const projects = [
  { 
    title: 'NBA Game Performance', 
    url: '/projects/nba_game_performance', 
    time: 'Full 2020', 
    media: {
        component: 'img',
        path: 'images/shooting.gif',
        alt: 'Cover for NBA project',
        title: 'Shooting',
    },
    tags: ['javascript', 'nextjs', 'd3js'], 
    links: [
      {
        url: 'https://nba-game-performance.netlify.app/',
        iconType: 'website',
        caption: 'WEBSITE',
      },
      {
        url: 'https://github.com/jia7xiong/nba-game-performance',
        iconType: 'code',
        caption: 'CODE',
      },
      {
        url: 'https://www.youtube.com/watch?v=9iNS43uMiOM&feature=youtu.be',
        iconType: 'demo',
        caption: 'DEMO',
      },
    ],
    description: '', 
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    backgroundColor: theme.palette.secondary.dark,
    padding: '25px',
    
  },
  wrapper: {
    maxWidth: '840px', 
    margin: 'auto',
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='projects'>   
      <div className={classes.wrapper}>

        <Typography component="h1" variant="h4" gutterBottom>
          ➜ fetchProjects()
        </Typography>

        {projects.map((project)=>(
          <Project 
            key={project.title}
            title={project.title}
            url={project.url}
            time={project.time}
            media={project.media}
            tags={project.tags}
            description={project.description}
            links={project.links}
          />
        ))}

      </div>
    </div>
  );
}
