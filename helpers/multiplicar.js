const fs = require('fs');
const colors = require('colors');
//
const crearArchivo = async (base, listar, hasta) => {
  try {
    if (!base) {
      throw new Error('La variable base no existe');
    }
    let salida = '',
      consola = '';
    for (let i = 0; i <= hasta; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
      consola += `${colors.blue(base)} * ${colors.red(i)} = ${colors.magenta(
        base * i
      )}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if (listar) {
      console.log('(--------------------------)'.rainbow);
      console.log(`(-------- TABLA DEL ${base}------)`);
      console.log('(--------------------------)'.rainbow);
      console.log(consola);
    }
    return `tabla-${colors.red(base)}.txt creada`;
  } catch (err) {
    return err;
  }
};
module.exports = {
  crearArchivo,
};
