import('./1.js')
  .then((file) => {
    console.log(file);
  })
  .catch((error) => {
    console.error(error);
  })
