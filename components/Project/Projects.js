import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProjectCard from './ProjectCard';
import projects from '../../public/projects.json';
import PrimaryLink from '../PrimaryLink';

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

  projects[2].description = 
  <>
    Oracle of Blade is a third person turn-based role-playing game made with Unreal Engine&nbsp;
    <PrimaryLink href='https://docs.unrealengine.com/en-US/ProgrammingAndScripting/Blueprints/GettingStarted/index.html'>blueprints</PrimaryLink>&nbsp; 
    visual scripting system.&nbsp;
    <PrimaryLink href='https://www.scrum.org/resources/what-is-scrum'>Scrum</PrimaryLink>&nbsp; 
    was used during the development life cycle to increase team's efficiency.
  </>

  return (
    <div className={classes.root} id='projects'>   
      <div className={classes.wrapper}>

        <Typography component="h1" variant="h4" gutterBottom>
          ➜ fetchProjects()
        </Typography>

        {projects.map((project)=>(
          <ProjectCard 
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
