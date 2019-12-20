const fs = require('fs');




let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject("No es un numero");
            return;
        }
        let data = '';
        for (let i = 1; i <= 18; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/Tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}


module.exports = {
    crearArchivo
}