// Funcion rechaza una argumento nombre de archivo(string)

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (typeof filename === 'string') {
      reject(new Error('$fileName cannot be processed'));
    } else {
      resolve('');
    }
  });
}
