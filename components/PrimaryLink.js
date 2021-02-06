import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import CodeIcon from '@material-ui/icons/Code';
import { FaLink } from "react-icons/fa";
import VideocamIcon from '@material-ui/icons/Videocam';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const PrimaryLink = function PrimaryLink(props) {
  const { iconType, children, ...other} = props;

  let icon;
  let url;

  switch (iconType) {
    case 'code':
      icon = <CodeIcon style={{marginRight: '5px'}} />;
      break;
    case 'website':
      icon = <FaLink style={{marginRight: '5px'}} />;
      break;
    case 'demo':
      icon = <VideocamIcon style={{marginRight: '5px'}} />;
      break;
    case 'paper':
      icon = <DescriptionIcon style={{marginRight: '5px'}} />;
      break;
    case 'github':
      icon = <GitHubIcon style={{marginRight: '5px'}} />;
      url = 'https://github.com/jia7xiong';
      break;
    case 'linkedin':
      icon = <LinkedInIcon style={{marginRight: '5px'}} />;
      url = 'https://www.linkedin.com/in/jiaqixiong/';
      break;
    default:
      break;
  }

  const useStyles = makeStyles((theme)=>({
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    textLink: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    iconLink: {
      "&:hover": {
        color: theme.palette.primary.dark,
      },
    },
  }));
  
  const classes = useStyles();

  if (children) {
    return (
      <span className={classes.wrapper}>
        {icon}
        <Link color='textPrimary' className={classes.textLink} underline='none' {...other}>
          {children}
        </Link>
      </span>
    );
  }
  else {
    return (
      <Grid container justify='center'>
        <Link color='textPrimary' className={classes.iconLink} href={url} underline='none' {...other}>
          {icon}
        </Link>
      </Grid>
    );
  }
};

PrimaryLink.propTypes = {
  iconType: PropTypes.string,
  children: PropTypes.string,
};

PrimaryLink.defaultProps = {
  iconType: "",
  children: "",
};

export default PrimaryLink;
