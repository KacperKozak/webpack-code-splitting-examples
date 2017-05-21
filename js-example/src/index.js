const file = import('./first');

console.log('Loading', file);

file
  .then(console.log)
  .catch(console.error)
