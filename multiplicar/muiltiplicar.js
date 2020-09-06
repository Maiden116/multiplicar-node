const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        return console.log(`El valor introducido ${base} no es un numero`.red);
    }

    console.log(`===========Tabla de ${base}=============`.underline.green);
    console.log(`=============Hasta ${base} * ${limite}===========`.underline.green);
    console.log(`========================`);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${ i } = ${ i * base}\n`.red);
    }
}

let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} no es un numero`)
    }
    let data = ``;
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${ i } = ${ i * base} \n`;
    }
    await fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
    })
    return `tabla-${base}.txt`
}

module.exports = {
    crearArchivo,
    listarTabla
}