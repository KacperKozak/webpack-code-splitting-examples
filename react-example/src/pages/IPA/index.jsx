import React from 'react';
import Async from '../../Async';

export default () => (
  <Async load={import(/* webpackChunkName: ipa */ './IPA')} />
);
