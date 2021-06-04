const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
//
console.clear();

// const base = 6;
crearArchivo(argv.base, argv.listar, argv.hasta)
  .then(console.log)
  .catch(console.log);
