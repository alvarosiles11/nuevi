// NOTA: escribir en terminal y vemos el resultado
// node ./readFileJson/json.js



// EXAMPLE: file system mediante require
// INFO: file system mediante require
const fs = require("fs");
// read file json
const data = fs.readFileSync("./readFileJson/dataUsers.json");
// convierte el archivo JSON a objeto || lo desencripta a un objeto
const libros = JSON.parse(data);
//imprime el data
console.log(libros);
console.log(typeof (libros));

 

// EXAMPLE: file system mediante require
// INFO: require es una funcion asincrona y se llama una vez que el archivo se carga, no lee datos actualizados
// let jsonData = require("./dataUsers.json");
// console.log(jsonData);
// console.log(typeof (jsonData));



// EXAMPLE: file system mediante require
// import jsonData from "./readFileJson/dataUsers.json" assert { type: "json" };
// import jsonData from "/readFileJson/dataUsers.json"  ;
// export default jsonData;
// document.getElementById("title").innerHTML = JSON.stringify(jsonData);
// console.log(jsonData);
// console.log(typeof jsonData);


// EXAMPLE: file system mediante require
// import jsonData from "./readFileJson/dataUsers.json" assert { type: "json" };
// export default jsonData;
// console.log(jsonData);
// console.log(typeof jsonData);
