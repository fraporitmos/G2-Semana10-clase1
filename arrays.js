var arrayNumbers = [2, 44, 2231, 13, 224, 95];
//pop : Quitar el último elemento del array y te lo retorna
var ultimoElemento = arrayNumbers.pop();
console.log(`Ultimo elemento: ${ultimoElemento}`);

//shift : Quitar el primer elemento del array y te lo retorna

var primerElemento = arrayNumbers.shift();
console.log(`Primer elemento: ${primerElemento}`);

console.log("Array alterado 1:");
console.log(arrayNumbers);

//Push:
var agregarUltimo = arrayNumbers.push(95);
console.log(`Nuevo tamaño del array: ${agregarUltimo}`);

//Unshiift
var agregarInicio = arrayNumbers.unshift(2);
console.log(`Nuevo tamaño del array: ${agregarInicio}`);

console.log("Array alterado 2:");
console.log(arrayNumbers);

//foreach
arrayNumbers.forEach((item) => {
  if (item % 2 === 0) {
    console.log(`Es par: ${item}`);
  }
});

var semana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

//indexOf : nos retorna el primer indice de un valor del array en especifco de caso contrario retorna -1

var dia = "miercoles";

if (semana.indexOf(dia) == -1) {
  console.log("No es dia de la semana");
} else {
  console.log(`Dia en numero: ${semana.indexOf(dia) + 1}`);
}

//filter :  Filtra cada elemento y te retorna un nuevo array con los elemtos que cumplan la condicion declarada
let diasConM = semana.filter((item) => item.startsWith("m"));
console.log(diasConM);

let numPares = arrayNumbers.filter((item) => item % 2 === 0);
console.log(numPares);

//length: Te retorna el tamaño del array, cuenta todos los elementos que existen
console.log(`Longitud del array semana: ${semana.length}`);

//find: encuentra el primer elemento que cumpla con la condición y te retorna ese elemento
var primerPar = arrayNumbers.find((item) => item % 2 === 0);
var primerImpar = arrayNumbers.find((item) => item % 2 !== 0);

console.log(`Primer par ${primerPar}`);
console.log(`Primer impar ${primerImpar}`);

//findIndex:  encuentra el primer elemento que cumpla con la condición y te retorna el indice

var indicePrimerPar = arrayNumbers.findIndex((item) => item % 2 === 0);
var indecePrimerImpar = arrayNumbers.findIndex((item) => item % 2 !== 0);

console.log(`Indice del par: ${indicePrimerPar}`);
console.log(`Indice del impar: ${indecePrimerImpar}`);

//Saber el ultimo elemento del array sin eliminarlo
var arrayNumbersCopy = [2, 44, 2231, 13, 224, 95];
var ultimoElemento = arrayNumbersCopy[arrayNumbersCopy.length - 1];
console.log(`Ultimo elemento con length: ${ultimoElemento}`);

let flag = true;
var index = 0;
var ultimoElemento2 = 0;
while (flag) {
  if (index == arrayNumbersCopy.length - 1) {
    ultimoElemento2 = arrayNumbersCopy[index];
    flag = false;
  } else {
    index = index + 1;
  }
}

console.log(`Ultimo elemento con estructura de datos: ${ultimoElemento2}`);

//Slice
var ultimoElementoSlice = arrayNumbersCopy.slice(-1)[0];
console.log(`Ultimo elemento con slice: ${ultimoElementoSlice}`);

const animals = ["pato", "gato", "perro", "mono", "elefante"];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

//Some
const existAnimal = animals.some((item) => item === "perro");
console.log(`Metodo some: ${existAnimal}`);

//Every
const todosElefantes = animals.every((item) => item === "elefante");
console.log(`Metodo every: ${todosElefantes}`);

const products = [
  {
    id: 1,
    price: 300,
    name: "Silla gammer",
  },
  {
    id: 2,
    price: 100,
    name: "Mouse",
  },
  {
    id: 3,
    name: "Teclado",
  },
];

//Includes
const hayGato = animals.includes("gato");
console.log(`Metodo includes: ${hayGato}`);

const todosConPrecios = products.every((item) => item.price > 0);
console.log(`Array con objetos ${todosConPrecios}`);

//Revert
console.log(animals.reverse());
