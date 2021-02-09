import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNextDotJs } from "react-icons/si";
import { SiD3DotJs } from "react-icons/si";

export default function Tag(props) {
  const { tagName, ...other } = props;

  let tagColor;
  let tagBGColor;
  let icon;
  let label;

  switch (tagName) {
    case 'python':
      tagBGColor = '#4B8BBE';
      tagColor = '#FFE873';
      icon = <FaPython color={tagColor}/>;
      label = 'Python';
      break;
    case 'javascript':
      tagBGColor = '#f0db4f';
      tagColor = '#323330';
      icon = <SiJavascript color={tagColor}/>;
      label='JavaScipt';
      break;
    case 'matlab':
      tagBGColor = '#ff5a07';
      tagColor = '#242d2d';
      label = 'MATLAB';
      break;
    case 'postgresql':
      tagBGColor = '#0064a5';
      tagColor = 'white'
      icon = <SiPostgresql color={tagColor}/>;
      label = 'PostgreSQL';
      break;
    case 'nextjs':
      tagBGColor = 'black';
      tagColor = 'white';
      icon = <SiNextDotJs color={tagColor}/>;
      label ='Next.js';
      break;
    case 'd3js':
      label = 'D3.js';
      tagBGColor = '#f6894a';
      tagColor = 'black'
      icon = <SiD3DotJs color={tagColor} />;
    default:
      break;
  }

return (
  <Chip style={{backgroundColor: `${tagBGColor}`, color: `${tagColor}`}} icon={icon} label={label} {...other} />
);
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};