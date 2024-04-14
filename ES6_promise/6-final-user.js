// Importar las funciones necesarias
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Definir y exportar la función handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Llamar a signUpUser con firstName y lastName
  const signUpPromise = signUpUser(firstName, lastName);

  // Llamar a uploadPhoto con fileName
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Esperar a que todas las promesas se resuelvan o se rechacen
  return Promise.allSettled([signUpPromise, uploadPhotoPromise]).then((results) =>
    // Mapear los resultados a un array con la estructura requerida
    results.map((result) => ({
      status: result.status, // status de la promesa (fulfilled o rejected)
      value: result.status === 'fulfilled' ? result.value : result.reason, // valor o error devuelto por la promesa
    })));
}
