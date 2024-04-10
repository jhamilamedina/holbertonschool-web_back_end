// Esta funcion devuelve una promesa(promisse)

function getResponseFromAPI() {
  // se crea una nueva promesa
  return new Promise((resolve, reject) => {
    // se simula una llamada al API
    // Devulve un resultado en un tiempo determinado
    setTimeout(() => {
      const exito = true;
      // Se obtiene la respuesta del API en un json

      if (exito) {
        resolve('¡Respuesta de la API recibida!');
      } else {
        reject(new Error('Error al obtener los datos'));
      }
    }, 2000);
  });
}

// Manejamos la promesa con .then para el exito
getResponseFromAPI()
  .then((data) => {
    console.log('Datos obtenidos', data);
  })

  // Utilizamos el catch para el error
  .catch((error) => {
    console.error('Los datos no fueron obtenidos:', error.message);
  });
