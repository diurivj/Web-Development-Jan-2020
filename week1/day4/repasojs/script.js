const name = "jose carlos";
const lastName = "correa";
const fullName = name && lastName ? name + " " + lastName : null;
const magicNumber = 2;
const bool = true;

function getLastName() {
  return lastName + " " + "Mandujano";
}

const returnMagicNumber = number =>
  number === 1 ? "one" : number === 2 ? "two" : "three";

console.log(returnMagicNumber(magicNumber));

console.log(name + " " + lastName);
// ternario: condición ? caso verdadero : caso falso (por defecto)
console.log(`${name} ${2 > 3 ? getLastName() : "sin apellido"}`);

// Hacer un tipo de busqueda (barra de busqueda)

const movies = [
  "bastardos sin gloria",
  "pulp fiction",
  "mad max",
  "el bromas",
  "a todo gas"
];

function findMovie(text) {
  return movies.filter(movie => movie.includes(text));
}

console.log(findMovie("bromas"));
// filtrar y mapear

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mult4x2 = numbersArr
//   .filter(number => number % 4 === 0)
//   .map(number => number * 2);
// console.log(mult4x2);

// forEach no devuelve un arreglo nuevo
const numbersArrx2 = numbersArr.forEach(number => number * 2);
// const numbersArrx2 = numbersArr.map(number => number * 2);

console.log(numbersArrx2);

// filter, map y sort

const mult4x2 = numbersArr
  .filter(number => number % 4 === 0)
  .map(number => number * 2)
  .sort((a, b) => b - a)
  .map(n => n + 5);
console.log(mult4x2);

// palindromo

const words = [
  "poop",
  "yey",
  "ana",
  "anitalavalatina",
  "oxxo",
  "juan",
  "nose",
  "lol"
];

function esPalindromo(word) {
  return (
    word ===
    word
      .split("")
      .reverse()
      .join("")
  );
}

const palindromos = words
  .filter(word => esPalindromo(word))
  .map(word => word.toUpperCase())
  .sort()
  .reverse();

console.log(palindromos);
