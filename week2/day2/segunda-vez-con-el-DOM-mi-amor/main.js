const button = document.querySelector('button')
const input = document.querySelector('input[type="text"]')

// listeners      // events
button.addEventListener('click', createNode)

// button.onclick = createNode

function createNode() {
  // capturar el valor
  const { value } = input
  const KANYE =
    'http://www.brooklynvegan.com/files/2016/11/maxresdefault1.jpg?zc=1&s=0&a=t&q=89&w=630'
  const node = document.createElement(value)
  if (value === 'img') {
    node.setAttribute('src', KANYE)
  } else {
    node.innerText = 'pepega'
    node.setAttribute('class', 'funny')
  }
  document.querySelector('#content').appendChild(node)
  input.value = ''
  document.querySelectorAll('img').forEach(img =>
    img.addEventListener('click', event => {
      // event.target o this WTFFFF????
      const { target } = event
      document.querySelector('#content').removeChild(target)
    })
  )
}
