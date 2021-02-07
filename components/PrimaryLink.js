import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import CodeIcon from '@material-ui/icons/Code';
import { FaLink } from "react-icons/fa";
import VideocamIcon from '@material-ui/icons/Videocam';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function PrimaryLink(props) {
  const { iconType, children, ...other} = props;

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
    iconStyle: {
      marginRight: '5px',
    }
  }));

  const classes = useStyles();

  let icon;
  let url;

  switch (iconType) {
    case 'code':
      icon = <CodeIcon style={{}} />;
      break;
    case 'website':
      icon = <FaLink className={classes.iconStyle} />;
      break;
    case 'demo':
      icon = <VideocamIcon className={classes.iconStyle} />;
      break;
    case 'paper':
      icon = <DescriptionIcon className={classes.iconStyle} />;
      break;
    case 'github':
      icon = <GitHubIcon className={classes.iconStyle} />;
      url = 'https://github.com/jia7xiong';
      break;
    case 'linkedin':
      icon = <LinkedInIcon className={classes.iconStyle} />;
      url = 'https://www.linkedin.com/in/jiaqixiong/';
      break;
    default:
      break;
  }

  if (children && iconType) {
    return (
      <span className={classes.wrapper}>
        {icon}
        <Link color='textPrimary' className={classes.textLink} underline='none' {...other}>
          {children}
        </Link>
      </span>
    );
  }
  else if (children) {
    return (
      <Link color='textPrimary' className={classes.textLink} underline='none' {...other}>
        {children}
      </Link>
    );
  }
  else {
    return (
      <Link color='textPrimary' className={classes.iconLink} href={url} {...other}>
        {icon}
      </Link>
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
