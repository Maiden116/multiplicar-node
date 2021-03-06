//requiers
const { argv } = require('./config/yargs')
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/muiltiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        {
            console.log('Listar');
            listarTabla(argv.base, argv.limite);
            break;
        }
    case 'crear':
        {
            console.log('Crear');
            crearArchivo(argv.base, argv.limite).then(archivo => {
                console.log(`Archivo creado ${colors.green(archivo)}`);
            }).catch((e) => {
                console.log(e)
            })
            break;
        }
    default:
        {
            console.log('comando no reconocido');
        }
}