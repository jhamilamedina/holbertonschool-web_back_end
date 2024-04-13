export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
      // Si el nombre y apellido no son cadenas se rechaza la promesa
      reject(new Error('Los Datos deben ser cadenas.'));
    } else {
      // Se crea el objeto user con los nombres dados
      const user = {
        firstName,
        lastName,

      };
      resolve(user);
    }
  });
}
