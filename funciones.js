const array = [3, 453, 3465, 54, 5, 1, 67];

var variableVar = 400;
var variableVar = 500;

//Arrow Fuctions: No tiene hoisting por lo que debe de declarse antes de ser llamado
const ordenarArray2 = (array) => {
  //Scope de var, es conocido a nivel de toda la funcion, caso contrario al let
  console.log(example);
  if (true) {
    var example = "Ejemplo";
  }
  if (true) {
    console.log(example);
  }
};

ordenarArray2(array);

//Funciones convencionales
function ordenarArray1(array) {
  if (true) {
    var aux = false;
    console.log("1" + aux);
  }
  console.log("2" + aux);
}

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const divir = (num1, num2) => num1 / num2;

const calculadora = (operacion, num1, num2) => {
  switch (operacion) {
    case "sumar":
      return sumar(num1, num2);
    case "restar":
      return restar(num1, num2);
    case "multiplicar":
      return multiplicar(num1, num2);
    case "divir": {}
      return divir(num1, num2);
    default:
      console.log("No es una operacion");
  }
};

let resp = calculadora("multiplicar", 2, 4);
console.log(resp);
