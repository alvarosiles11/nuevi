// NOTA: escribir en terminal y vemos el resultado
// node ./writeFileJson/json.js

// INFO: file system mediante require
const fs = require("fs");

// arreglo Json
let data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

// convertimos el JSON a string
let jsonData = JSON.stringify(data);

// imprime el data en consola
console.log(jsonData);
console.log(typeof jsonData);

// crea un archivo json con el data
fs.writeFile("./writeFileJson/generado.json", jsonData, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log("Archivo creado");
  }
});
