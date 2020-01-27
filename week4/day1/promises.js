// LES DIJE QUE PARA LIDIAR CON PROCESOS ASINCRONOS USAMOS CALLBACKS

// PROMISES

let alive = true

const traeHuevitosMijito = new Promise((resolve, reject) => {
  if (alive) {
    resolve('🥚')
  } else {
    reject(new Error('se murio'))
  }
})
/*
traeHuevitosMijito
  .then((response) => {
    console.log('🍞' + response)
  })  
  .catch((err) => {
    console.log(err)
  })
*/

let password = 'contraseña'
const checkPassword = new Promise((resolve, reject) => {
  if (password === 'contraseña') {
    setTimeout(() => resolve('Bienvenido'), 3000)
  } else { 
    setTimeout(() => reject('quien eres'), 3000)
  }
})

/*
checkPassword
  .then(response => console.log(response))
  .catch(err => console.log(err))
  */






// CALLBACKS
// PROBLEM => CALLBACK HELL

// PROMISES
// PROBLEM => USE CALLBACKS 

// ASYNC / AWAIT
async function resolvePromises() {
  const firstResponse = await traeHuevitosMijito
  const secondResponse = await checkPassword    
  console.log({ firstResponse, secondResponse })
}

let somethingWentWrong = false

const getData = new Promise((resolve, reject) => {
  if (somethingWentWrong) {
    reject('Lo siento, nuestros servidores se cayeron')
  } else {
    resolve({
      name: 'Diego',
      lastname: 'Vazquez'
    })
  }
})

// es6
// resolve with promises, then and catch
getData
  .then(response => console.log(response))
  .catch(err => console.log(err))

// es8
const resolveData = async ()  => {
  const response = await getData
  console.log(response)
}

resolveData()

