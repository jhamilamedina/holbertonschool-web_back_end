// Importar las funciones necesarias
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Definir y exportar la función handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  })));
}
