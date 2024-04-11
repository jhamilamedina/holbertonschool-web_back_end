export default function handleResponseFromAPI(promise) {
  // Agregamos un manejador utilizando el método .then()
  promise.then((response) => {
    // Si la promesa se resuelve correctamente, mostramos un mensaje en la consola
    console.log('Got a response from the API', response);
    // Retornamos un objeto con los atributos solicitados
    return { status: 200, body: 'success' };
  })
  // Agregamos un manejador utilizando el método .catch()
    .catch((error) => {
    // Si la promesa es rechazada, mostramos un mensaje en la consola
      console.log('Got a response from the API', error);
      // Retornamos un objeto Error vacío
      return new Error();
    });
}

// Ejemplo de uso de la función handleResponseFromAPI()

// Creamos una promesa (puedes simularla con una función que devuelve una promesa)
const myPromise = new Promise((resolve) => {
  // Simulamos una operación asíncrona exitosa
  resolve('');
});

// Llamamos a la función handleResponseFromAPI() con nuestra promesa
handleResponseFromAPI(myPromise);
