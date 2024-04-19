// Devuelve la suma de todos los identificadores de estudiantes.

export default function getStudentIdsSum(ListStudents) {
  let suma = null;
  if (Array.isArray(ListStudents)) {
    suma = ListStudents.reduce((acumulador, student) => acumulador + student.id, 0);
  }
  return suma;
}
