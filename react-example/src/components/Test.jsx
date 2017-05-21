import React from 'react';
// import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

const Test = ({ example }) => (
  <div>
    {example}
    <Flag code="pl" width="60" />
    <Flag code="de" width="60" />
    <Flag code="ru" width="60" />
  </div>
);

export default Test;
