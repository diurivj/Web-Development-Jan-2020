// vanilla
var nombreDeLaVariable = 'algo'

// ES6
const nombreDeOtraVariable = 'algo mas'
let otraVariable = 'askdhsakjdas'

// data types

// String => 'a'
// Number => 10 1.2 -12
// Boolean => true false
// null 
// undefined
// Symbol 
// NaN 

// data structures
// Object
// Array

// palabra reservada
let name = 'Diego' // declarar variable con asignacion
name = 'Leo' // reasignar variable
let quesera // declaramos una variable sin asignacion
name = 39

// PascalCase 
// snake_case
// camelCase

// console.log(name)
let numero = 9

// = asignacion
// == comparacion de valor
// === comparacion de valor y tipo de dato

// undefined y null son falsy 
let noesciertomama 

// operadores logicos
// este valor Y este tambien &&(and)
// este valor O el otro valor ||(or)
// ESTE VALOR NEGADO !(not)

// modulo % =>  te da el residuo de una division 
 
if (noesciertomama || true) {
  // se ejecuta si es verdadero
  //console.log('hola')
} else {
  // se ejecuta si es falso
  //console.log('adios')
}
let joss = 'Joss'

//for (let i = 0; i < joss.length; i++) {
  //if (i % 2 === 0) {
    //console.log(joss[i].toUpperCase())  
  //} else {
   // console.log(joss[i])
  //}
// }

//'Diego Uriel Vazquez Jaramillo'.toUpperCase()
//'Diego Uriel Vazquez Jaramillo'.length

const food = 'gorditas de chicharron'
//console.log(food[food.length - 1])

//console.log(food.charAt(0))
//console.log(food.indexOf('d'))


let diego = 'Diego'.split('')
.reverse()
.join('')
.toUpperCase()

//console.log(diego)

// console.log(9 + 1)

let numRnd = Math.round(5.5)

// 5.5
// ceil 6 
// round 5
// floor 5

//console.log(.3 + .4)

//let i = 0
//do {
  //console.log('que pedal')
  //i++
// } while (i < 9) 
  
  
const number = prompt('Dame un numero del 1 al 9')
const eneagramaNumber = Math.ceil(Math.random() * Number(number))

switch (eneagramaNumber) {
  case 1:
    console.log('el reformador')
    break
  case 2:
    console.log('el ayudador')
    break
  case 3:
    console.log('el triunfador')
    break
  case 4:
    console.log('el individualista')
    break
  case 5:
    console.log('el investigador')
    break
  case 6:
    console.log('el leal')
    break
  case 7:
    console.log('el entusiasta')
    break
  case 8:
    console.log('el desafiador')
    break
  case 9:
    console.log('el pacificador')
    break
  default: 
    console.log('Lo siento mijito, estas maldito')
    break
}
