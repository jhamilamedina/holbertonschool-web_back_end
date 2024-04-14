// Funcion rechaza una argumento nombre de archivo(string)

export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
