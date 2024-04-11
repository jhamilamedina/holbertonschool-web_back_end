export default function handleResponseFromAPI(promise) {
  // Agregamos un manejador utilizando el método .then()
  promise.then(() => {
    // Si la promesa se resuelve correctamente, mostramos un mensaje en la consola
    console.log('Got a response from the API');
    // Retornamos un objeto con los atributos solicitados
    return { status: 200, body: 'success' };
  })
  // Agregamos un manejador utilizando el método .catch()
    .catch((error) => {
    // Si la promesa es rechazada, mostramos un mensaje en la consola
      console.log(error);
      // Retornamos un objeto Error vacío
      return new Error();
    });
}
