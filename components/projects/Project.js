import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import PrimaryLink from '../PrimaryLink';
import Tag from '../Tag';

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
    card: {
      padding: theme.spacing(2),
      backgroundColor:theme.palette.secondary.main,
    },
    info: {
      height: '100%',
    },
    titleBlock: {
      top: 0,
      position: 'absolute', 
      height: '100%',
      width: '100%'
      // whiteSpace: 'nowrap',
      // display:'flex',
      // alignItems:'center',
      // justifyContent: 'center',
    },
    title: {
      maxHeight: '50%',
      backgroundColor: theme.palette.secondary.dark,
      overflow: 'auto', 
      // textOverflow: 'ellipsis',
      // zIndex: '1001',
      // '&:hover': {
      //   overflow: 'auto', 
      // },
    },
    image: {
      borderRadius: '2%', 
      opacity: 0.5,
    },
    tag: {
      width: '100%',
      bottom: 0,
      position: 'absolute', 
      zIndex: '1001',
      backgroundColor: theme.palette.secondary.dark,
    },
    description: {
      textAlign: 'justify',
    },
  }));  

export default function Project (props) {

    const { title, url, time, media, tags, links, description} = props;

    const classes = useStyles();

  return (
    <Card className={classes.card} raised>
        <Grid container justify='center' spacing={0}>
            <Grid item md={3} >
                <CardActionArea className={classes.info} href={url}>
            
                    <Grid container direction='column' justify='space-between'>
                        <Grid item>
                            <CardMedia
                                component={media.component}
                                alt={media.alt}
                                className={classes.image}
                                image={media.path}
                                title={media.title}
                            />
                        </Grid>

                        <Grid item className={classes.titleBlock}>
                            <Typography variant="h6" component="h2" align='center' className={classes.title}>
                                    {title}
                                <Typography gutterBottom variant="caption" component='div' align='center'>
                                    {time}
                                </Typography>
                            </Typography>
                        </Grid>

                        <Grid item className={classes.tag}>
                            <Grid container justify='space-between'>
                               {tags.map((tag)=>(
                                    <Grid item key={tag}>
                                        <Tag tagName={tag}></Tag>
                                    </Grid>
                               ))}
                            </Grid>
                        </Grid>

                    </Grid>
                </CardActionArea>
            </Grid>
        
            <Grid item md={9} style={{paddingLeft: '75px', paddingRight: '75px'}}>
                <Grid container direction='column' justify='space-around' spacing={5}>
                    <Grid item>
                        <Typography variant="body2" color="textPrimary" component="p" className={classes.description}>
                                {description}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={5}>
                            {links.map((link)=>(
                                <Grid item key={link.iconType}>
                                    <PrimaryLink href={link.url} iconType={link.iconType}>{link.caption}</PrimaryLink>
                                </Grid>

                            ))}
                        </Grid>
                    </Grid>

            </Grid>
        </Grid>
        </Grid>
    </Card>

  )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    time: PropTypes.string.isRequired,
    media: PropTypes.object.isRequired,
    tags: PropTypes.array,
    links: PropTypes.array,
    description: PropTypes.node,
}

Project.defaultProps = {
    title: '',
    url: '',
    time: '',
    meida: {},
    tags: [],
    links: [],
    description: '',
}

