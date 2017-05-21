import React from 'react';
// import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

const Test = ({ example }) => (
  <div>
    {example}
    <Flag code="gb" width="60" />
  </div>
);

export default Test;
