// conjunto de datos
// ordenados o no ordenados
// puedene haber estructuras de datos nested
// NOOOO libreria, diccionario

// ARRAYS 
// ordenados
const foodsArr = [
  'tacos de tripa sin lavar 😋',
  'mariscos',
  'tacos',
  'ravioles'
]

const fn = foodsArr[foodsArr.length - 1]

// cuando no encuentra el elemento, nos regresa -1
// console.log(foodsArr.indexOf('sayHello')) 
// nos regresa su indice
//console.log(foodsArr.indexOf('ravioles')) 

// agrega elementos al final
foodsArr.push('pesto')

// agrega elementos al inicio
foodsArr.unshift('curry')

// borra el ultimo elemento
foodsArr.pop()

// borra el primer elemento 
foodsArr.shift()

//console.log(foodsArr)

//for (let i = 0; i < foodsArr.length; i++) {
  //console.log(foodsArr[i])
//}

// para borrar es => (position, count)
// para agregar es => (position, 0, newElement)
// para reemplazar es => (position, 1, newValue)

//foodsArr.splice(1, 1, 'algo nuevo')
//console.log(foodsArr)

// MAP
// arr.map((elem, idx, array) => whatever that you want) 

// FILTER
// arr.filter((elem, idx, array) => condition) 


// const newFoodsArr = foodsArr.filter(food => food.includes('v'))
// console.log(newFoodsArr)

// REDUCE
// arr.reduce((acc, elem) => reduce fn)

const grades = [4, 3, 1, 5, 2]
const suma = grades.reduce((acc, grade) => {
    return acc + (grade / grades.length)
}, 0)  // ó para los mortales / grades.length

const letras = ['d', 'i', 'e', 'g', 'o']
const nombree = letras.reduce((acc, letra) => {
  return acc + letra
})

// console.log(nombre)

const arrr = ['a', 'f', 'A', 'w', 'b']

arrr.sort((a, b) => {
  if (a < b) return 1
  else if (a > b) return -1
  else return 0
})

// console.log(arrr)

//console.log(foodsArr[foodsArr.length - 1]())

// OBJECTS

// no ordenada
const person = {
  name: 'Diego',
  lastname: 'Vazquez',
  age: undefined,
  work: () => {
    return '🤡'
  }
}


person.work()

const keys = Object.keys(person)
//keys.map(key => console.log(person[key]))

// for in 
for (let key in person) {
  //console.log(person[key])
}

// for of
for (let key of keys) {
  //console.log(key)
}

// viejo
const personCopy = Object.assign({}, person)
// nuevo
// ... => spread operator
const otraCopy = { ...person } 
personCopy['age'] = null
otraCopy['age'] = 9999
//console.log(person, personCopy)
// console.log(otraCopy, person)

// Vanilla
const nombre = person.name
// console.log(nombre)

// ES6
const { name, age = 10, work } = person 
// console.log(age + 20)

const myArr = [1, 2, 3, 4, 5]

// Vanilla
const primerValor = myArr[0]
// ES6
const [, , segundo, ...rest] = myArr 

console.log(segundo, rest)

// exercise
const schoolSystem = {
  schools: [
    {
      name: "Fake School 1",
      classRooms: [
        {
          teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
          students: [
              { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
              { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
              { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
              { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
              { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
            ]
        },
        {
          teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
          students: [
            { firstName: 'Manley', lastName: 'Doyle', age: 18 },
            { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
            { firstName: 'Sid', lastName: 'Rohan', age: 30 },
            { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
            { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
          ]
        }
      ]
     },
     {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
          students: [
            { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
            { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
            { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
            { firstName: 'Rickie', lastName: 'White', age: 22 },
            { firstName: 'Rose', lastName: 'Collins', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
          students: [
            { firstName: 'Melany', lastName: 'Welch', age: 25 },
            { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
            { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
            { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
            { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
           ]
         }
       ]
	 },
	 {
      name: "Fake School 3",
      classRooms: [
        {
          teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
          students: [
            { firstName: 'Christop', lastName: 'Hahn', age: 26 },
            { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
            { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
            { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
            { firstName: 'Maudie', lastName: 'Haley', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
          students: [
            { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
            { firstName: 'Lois', lastName: 'Kulas', age: 28 },
            { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
            { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
            { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
          ]
        }
      ]
    }
  ]
};

