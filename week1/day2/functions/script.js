// palabra clave function
//       👇 nombre de la funcion
// function sumar(/* parametros */ numOne, numTwo) {
//   // cuerpo de la funcion
//   const suma = numOne + numTwo;
//   return suma;
// }

// const sumar = function(numOne, numTwo) {
//   const suma = numOne + numTwo;
//   return suma;
// };

// console.log(4 + sumar(9, 1));

// function pedirHelado(texto /* string */, cb /* <- esto es un callback */) {
//   cb(texto);
// }

// function peticionAmable(x) {
//   console.log(`hola cñor quiero un helado de ${x}`);
// }
// function peticionNoTanAmable(y) {
//   console.log(`dame un helado de ${y}`);
//   console.log(y);
// }

// pedirHelado("fresa", peticionNoTanAmable);

// pedirHelado("vainilla", function(y) {
//   console.log(`dame un helado de ${y}`);
//   console.log(y);
// });

// const min = 0;
// const max = 5;

// function random() {
//   const number = Math.floor(Math.random() * max) + min;
//   return number;
// }

// console.log(random());

// function loquesea(a, b, c = 4) {
//   console.log(a, b, c);
// }

// loquesea(1, 5, 29);

// // primer ventaja, puedo omitir los parentesis si tengo solo un parametro
// // segunda ventaja tengo un return implicito, significa que todo lo que este a la derecha de la flecha se retorna de inmediato.
// // Las arrow functions extienden su alcance...
// const sumar = (numOne, numTwo) => numOne + numTwo;

// // const sayHello = function(){
// //  console.log(`Hola Ironhackers`)
// // }
// console.log(sumar(2, 5));

// let saludo = "hola alsdjhfaskdjhfalsiduhfñaosid".split("");

// const saludos = saludo => {
//   console.log(saludo);
// };

// saludos(saludo);

function pedirHelado(texto /* string */, cb /* <- esto es un callback */) {
  cb(texto);
}

pedirHelado("limon", sabor => console.log(`quiero un helado de ${sabor}`));
