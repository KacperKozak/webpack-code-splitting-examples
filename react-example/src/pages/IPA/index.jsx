import React from 'react';
import Async from '../../Async';
// export { default } from './IPA';

export default () => (
  <Async load={import(/* webpackChunkName: ipa */ './IPA')} />
);
