// Funcion que devuelve una promesa en booleano

export default function getFullResponseFromAPI(success) {
  // crea nueva promesa
  return new Promise((resolve, reject) => {
    // Comprobamos el valor del parámetro success
    if (success) {
      // Si success es true, resolvemos la promesa con un objeto
      resolve({ status: 200, body: 'Success' });
    } else {
      // Si success es false, rechazamos la promesa con un objeto
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Manejamos la promesa con un .then
getFullResponseFromAPI(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('The fake API is not working currently:', error.message);
  });

  getFullResponseFromAPI(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('The fake API is not working currently:', error.message);
  });
