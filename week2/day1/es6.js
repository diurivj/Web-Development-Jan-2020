/*let person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
  friend: {
    friendName: `Mariana`,
    friend: {
      friendName2: 'sdsada',
      friend: {
      friendName3: 'sdsada'
    }
    }
  }
};

let {
  name,
  age,
  favoriteMusic,
  friend: {
    friendName,
    friend: {
      friendName2
    }
  }
  } = person

const hola = `mi nombre es ${name} y tengo ${age} años y mi musica favorita es: ${favoriteMusic} y mi amiga se llama ${friendName} ${friendName2}`

console.log(hola)*/

/* const numbers = [[1, 3],"one", "two", "three", "four", "five"];

const [[, x], one, two, ...restNumbers] = numbers

console.log(x, restNumbers) */

/*const arr =  [1,2,3,4,5,6]
const arrCopy = [...arr]
const arr2 =  [7,8,9]

console.log([...arr, ...arr2])*/

/*function name(){
  console.log(arguments)
  // tenemos acceso a todos los argumentos que se le pasaron a la funcion al ser invocada
}

function sum(...numbers){
  return numbers.reduce((acc, current) => acc + current )
}

console.log(sum(1,2,3,4,5, 10, 50, 53,23,24))


function add() {
  console.log(typeof arguments)
  return arguments.reduce((sum, next) => sum + next);
}
 
add(1, 2, 3); // 

*/

function showMovie(title, year, ...actors) {
  console.log(
    `${title} is released in ${year} and in the cast are: ${actors.map(
      actor => actor
    )}`
  );
}

showMovie(
  "El bromas",
  "2019",
  "Joaquin Phoenix",
  "Diego vazquez",
  "Robert De Niro"
);
