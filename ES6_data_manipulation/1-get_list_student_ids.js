// Definimos una funcion que devuelva una matriz de objetos
export default function getListStudentIds(arrayObjetos) {
  // Verificamos si el argumento es una matriz
  if (!Array.isArray(arrayObjetos)) {
    return []; // se devuelve una matriz vacia
  }

  // Utilizamos map para devolver una array de identificadores
  const newReturn = arrayObjetos.map((estudiante) => estudiante.id);

  // Retornamos el array
  return newReturn;
}
