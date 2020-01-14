console.log('que pedal')
// para manipular el DOM, tenemos que

// 1. Sujetar, nodo o nodos

// por id
// solo sujeta un nodo, porque sujeta ese nodo por Id
const footer = document.getElementById('diego')
console.log(footer)
// Setter
footer.style.backgroundColor = 'peru'
// Getter
console.log(footer.style.backgroundColor)

// por clase
console.log(document.getElementsByClassName('col-sm-7'))

// por etiqueta
//const h4s = document.getElementsByTagName('h4')
//console.log(h4s)

// for (let i = 0; i < h4s.length; i++) {
//   h4s[i].innerText = '💩'
// }

// Array.from(h4s).map(h4 => (h4.innerText = '🤡'))

// por algo avanzado parecido a jquery pero mucho mas chido y nativo y sobre todo nuevo, y aun mas con un nombre corto
// un nodo
// document.querySelector('div>span[name="diego"]')

// varios nodos
function random() {
  // if (parseFloat(h4.innerText.match(/[+\-]?\d+(,\d+)?(\.\d+)?/)[0]) >= 6) {
  // }
  document.querySelectorAll('h4').forEach(h4 => {
    h4.style.backgroundColor = generateRandomColor()
    switch (h4.innerText) {
      case '💩':
        return (h4.innerText = '👽')
      case '👽':
        return (h4.innerText = '🤓')
      case '🤓':
        return (h4.innerText = '😍')
      case '😍':
        return (h4.innerText = '💩')
      default:
        return (h4.innerText = '💩')
    }
  })
}

function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

setInterval(random, 500)
