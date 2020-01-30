// const sigueDeBorracho = true;

// const voyacambiar = new Promise((resolve, reject) => {
//   if (sigueDeBorracho) {
//     resolve(
//       new Promise(resolve =>
//         setTimeout(() => resolve("largate de la casa"), 2000)
//       )
//     );
//   } else {
//     setTimeout(() => resolve("te kiero"), 2000);
//   }
// })

// voyacambiar
//   .then(res => res)
//   .then(txt => console.log(txt))
//   .catch(err => console.error(err));

// Pasos para pasar de then a async/await
// 1. debes tener una funcion o identificar la función que está realizando código asíncrono
// 2. Decirle a la funcion que será asíncrona
// 3. Identificar el argumento del then y convertirlo en una constante/variable
// 4. igualar la variable a la promesa y agregamos el await
// 5. remover la estructura then y catch
// 6. manejar el error

// IIFE
(async () => {
  const sigueDeBorracho = true;

  const voyacambiar = new Promise((resolve, reject) => {
    if (sigueDeBorracho) {
      resolve(
        new Promise(resolve =>
          setTimeout(() => resolve("largate de la casa"), 2000)
        )
      );
    } else {
      setTimeout(() => resolve("te kiero"), 2000);
    }
  });

  const res = await voyacambiar;
  const txt = await res;
  console.log(txt);
})();

// // 👇
