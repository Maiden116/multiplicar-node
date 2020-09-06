const opt = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}
const argv = require('yargs')
    .command('listar', 'Impreme en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo con tabla de multiplicar a partir de una base y con un limite', opt)
    .help()
    .argv;


module.exports = {
    argv,
}