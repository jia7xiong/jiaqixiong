import React from 'react';
import PropTypes from 'prop-types';

export default function Media(props) {

  const {path, width, height} = props;
  console.log(width)
  
  return (
    <div style={{margin: 'auto', maxWidth: '840px'}}>
      <iframe src={path} style={{width: '100%', height: '80vh'}} />
    </div>
  );
}

Media.propTypes = {
  path: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};