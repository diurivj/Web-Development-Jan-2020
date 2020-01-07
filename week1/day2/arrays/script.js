const students = [
  {
    name: `Diego`,
    stickers: 2,
    hobbies: [`Jugar lol`, `andar en bici`, `jugar boliche`]
  },
  {
    name: `America`,
    stickers: 0,
    hobbies: [`escribir`]
  }
];

function addStudent(student) {
  students.push(student);
}

function removeLastStudent() {
  students.pop();
}

function removeOneStudent(index) {
  students.splice(index, 1);
}

addStudent({ name: `Carlos`, stickers: 0, hobbies: [`jugar ajedrez`] });

// removeOneStudent(0);

// forEach recibe un callback donde en el primer parametro tenemos cada uno de los elementos  del arreglo, como segundo parametro recibe el indice de cada elemento, como tercer parametro tenemos al arreglo mismo
students.forEach(student => {
  student.stickers += 1;
  student.hobbies.forEach(hobbie =>
    console.log(`a ${student.name} le gusta: ${hobbie}`)
  );
});
