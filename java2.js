//1
function Calculararea(base, altura) {
    let area = (base * altura) / 2;
    return area;
  }

let resultado = Calculararea(5, 3);
console.log("el area del triangulo es:", resultado);

//2
function par(numero) {
    return numero % 2 === 0;
  }

  let  number= 7;
if (par(number)) {
  console.log( number+ " es par");
} else {
  console.log( number+ " es impar");
};

//3
function positivo(numero) {
    return numero > 0;
  }

  let numero = -5;

if (positivo(numero)) {
  console.log(numero + " es un numero positivo.");
} else {
  console.log(numero + " no es un numero positivo.");
}