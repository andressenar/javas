//1
let numero = -5;

if (numero > 0) {
  console.log("el numero es positivo.");
} else if (numero < 0) {
  console.log("el numero es negativo.");
} else {
  console.log("el numero es cero.");
};

//2
let num1 = 10;
let num2 = 15;

if (num1 > num2) {
  console.log(num1 + " es mayor que " + num2);
} else if (num2 > num1) {
  console.log(num2 + " es mayor que " + num1);
} else {
  console.log("Los numeros son iguales.");
};

//3
let opcion = "refresco";

if (opcion === "refresco") {
  console.log("dispensando refresco.");
} else if (opcion === "agua") {
  console.log("dispensando agua.");
} else if (opcion === "jugo") {
  console.log("dispensando jugo.");
} else {
  console.log("opcionn no válida.");
}