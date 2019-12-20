const { crearArchivo } = require('./multiplicar/multiplicar');

// console.log(process.argv);


let parametro = process.argv[2];

console.log(parametro);
let base = parametro.split("=");

crearArchivo(base[1]).then(archivo => {
    console.log(archivo);

}).catch(err => {
    console.log(err);

});