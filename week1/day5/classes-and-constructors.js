// ES5

// constructor
// good practices:
// function Human ✅
// function human ❌
function Human(name, sleep = false) {
  this.name = name
  this.isSleeping = sleep
}

// we can add properties to our constructor with `prototype` word
Human.prototype.sayHello = function(algoextra) {
  if (this.isSleeping) {
    // in order to bind the `this` to the original constructor we use arrow functions
    setTimeout(() => {
      console.log(`Hi, my name is ${this.name}`)
    }, 1000)
  } else {
    console.log(`Hi, my name is ${this.name}`)
  }
}

// We can even modify the buit in methods of a constructor
String.prototype.funny = function() {
  return this.toUpperCase()
    .split('')
    .reverse()
    .join('')
}

'Jossesin'.funny()

// instance of the Human constructor
const human1 = new Human('Diego')
const human2 = new Human('Elsa2', true)

/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_---_---_--_--_-_--_-_----_--- */

// ES6
class Persona {
  constructor(name) {
    // only the attributes go here
    this.name = name
  }
  // we declare the methods below the constructor
  sayHello() {
    // same thing with the arrow function
    setTimeout(() => {
      console.log(`hi my name is ${this.name}, ${algoextra}`)
    }, 2000)
  }
}

// instances of Persona class
const diegoo = new Persona('Diego')
const alej = new Persona('asdas')

// we can declare super general classes
class Animal {
  constructor(legs, stripes, color) {
    this.legs = legs
    this.stripes = stripes
    this.color = color
  }
  fn() {
    console.log(this.legs)
  }
}

// We can extends and inherit some properties from other classes
class Dog extends Animal {
  constructor(legs, stripes, color, bark) {
    // we use word `super` in order to access the properties of the inherited class
    // we don't have to do any other thing in order to inherit the methods
    super(legs, stripes, color)
    this.bark = bark
  }
}

class Cat extends Animal {
  constructor(legs, stripes, color, miiiiauuu) {
    super(legs, stripes, color)
    this.miiiiauuu = miiiiauuu
  }
}

// instances
const nala = new Dog(4, false, 'black', 'que me ves prrro')
const kitty = new Cat(4, true, 'white', 'meq')

class Digimon {
  constructor() {}
  sayHello() {
    console.log('que mira prrro')
  }
}

class Pokemon extends Digimon {
  constructor(name, type, power) {
    super()
    this.name = name
    this.type = type
    this.power = power
    this.hp = 500
  }
  attack(pokemon) {
    console.log(`${this.name} attacked ${pokemon.name}`)
    const effiency = checkEffiency(this, pokemon)
    pokemon.hp -= this.power * effiency
    pokemon.isDead()
  }
  isDead() {
    if (this.hp <= 0) {
      console.log('X_X')
    } else {
      console.log(`${this.name} has ${this.hp} points of life`)
    }
  }
}

// instances
const diegoPokemon = new Pokemon('pikachu', 'electric', 50)
const charlyPokemon = new Pokemon('charmander', 'fire', 20)

diegoPokemon.attack(charlyPokemon)
diegoPokemon.attack(charlyPokemon)
diegoPokemon.attack(charlyPokemon)
diegoPokemon.attack(charlyPokemon)
diegoPokemon.attack(charlyPokemon)
diegoPokemon.sayHello()

function checkEffiency(pokemon1, pokemon2) {
  if (pokemon1.type === 'electric' && pokemon2.type === 'fire') return 2
}
