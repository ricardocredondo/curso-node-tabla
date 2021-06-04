const fs = require('fs');
//
const crearDatosUsuario = async (usuarios) => {
  try {
    if (!usuarios) throw new Error('La variable usuarios no existe');
    let dato = '';
    for (let usuario of usuarios) {
      dato += `Nombre: ${usuario} - Email: ${usuario}@${usuario}.com\n`;
    }
    fs.writeFileSync(`datos-usuarios.txt`, dato);
    return `Archivo datos-usuarios.txt ha sido creado`;
  } catch (err) {
    return err;
  }
};
module.exports = { crearDatosUsuario };
