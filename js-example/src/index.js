const file = import('./first');

console.log('Loading', file);

file
  .then(console.log)
  .catch(console.error)



// More dynamic...

const loadFromList = (name) => import(`./list/${name}`);

loadFromList('2').then(console.log);
