import React from 'react';
import ReactMomentCountDown from 'react-moment-countdown';

const CountDown = () => (
  <ReactMomentCountDown toDate={new Date()} />
);

export default CountDown;
