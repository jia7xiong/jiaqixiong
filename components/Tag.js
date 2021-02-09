import React from 'react';
import PropTypes from 'prop-types';
import theme from "../styles/theme";
import Chip from '@material-ui/core/Chip';
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNextDotJs } from "react-icons/si";
import { SiD3DotJs } from "react-icons/si";
import { FaRProject} from 'react-icons/fa';
import { SiMathworks } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { SiUnrealengine } from "react-icons/si";
import { SiBulma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact} from 'react-icons/fa';
import { DiScrum} from 'react-icons/di';
import { FaJava} from 'react-icons/fa';
import { SiCplusplus} from 'react-icons/si';
import { SiOpengl} from 'react-icons/si';


export default function Tag(props) {
  const { tagName, ...other } = props;

  let tagColor;
  let tagBGColor = theme.palette.primary.main;
  let icon;

  switch (tagName) {
    case 'Python':
      tagBGColor = '#4B8BBE';
      tagColor = '#FFE873';
      icon = <FaPython color={tagColor}/>;
      break;
    case 'JavaScript':
      tagBGColor = '#f0db4f';
      tagColor = '#323330';
      icon = <SiJavascript color={tagColor}/>;
      break;
    case 'C++':
      tagBGColor = '#00549D';
      tagColor = 'white';
      icon = <SiCplusplus color={tagColor}/>;
      break;
    case 'MATLAB':
      tagBGColor = '#ff5a07';
      tagColor = '#242d2d';
      icon = <SiMathworks color={tagColor} />;
      break;
    case "R":
      tagBGColor = '#165CAA';
      tagColor = '#BFC2C5';
      icon = <FaRProject color={tagColor}/>;
      break;
    case 'Java':
      tagBGColor = '#5382a1';
      tagColor = '#f89820';
      icon = <FaJava color={tagColor} />;
      break;
    case 'PostgreSQL':
      tagBGColor = '#0064a5';
      tagColor = 'white'
      icon = <SiPostgresql color={tagColor}/>;
      break;
    case 'MongoDB':
      tagBGColor = '#4DB33D';
      tagColor = '#E8E7D5'
      icon = <SiMongodb color={tagColor}/>;
      break;
    case 'Next.js':
      tagBGColor = 'black';
      tagColor = 'white';
      icon = <SiNextDotJs color={tagColor}/>;
      break;
    case 'React':
      tagColor = 'black';
      tagBGColor = '#61DBFB';
      icon = <FaReact color={tagColor}/>;
      break;
    case 'D3.js':
      tagBGColor = '#f6894a';
      tagColor = 'black'
      icon = <SiD3DotJs color={tagColor} />;
      break;
    case 'Bulma':
      tagBGColor = 'black';
      tagColor = '#00D1B2';
      icon = <SiBulma color={tagColor}/>;
      break;
    case 'OpenGL':
      tagBGColor = '#5586a6';
      tagColor = 'white';
      icon = <SiOpengl color={tagColor}/>;
      break;
    case 'Unreal Engine':
      tagBGColor = 'black';
      tagColor = 'white';
      icon = <SiUnrealengine color={tagColor}/>;
      break;
    case 'Scrum':
      tagColor = '#1899b6';
      tagBGColor = '#415870';
      icon = <DiScrum color={tagColor}/>;
      break;
    case 'Optimization':
      icon = <GrOptimize />;
      break;
    default:
      break;
  }

return (
  <Chip style={{backgroundColor: `${tagBGColor}`, color: `${tagColor}`}} icon={icon} label={tagName} {...other} />
);
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};