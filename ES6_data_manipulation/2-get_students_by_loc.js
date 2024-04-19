// Función para obtener la lista de estudiantes (simulada)
// Función para obtener estudiantes por ubicación

export default function getStudentsByLocation(listStudents, location) {
  let tempArray = '';
  if (Array.isArray(listStudents) && typeof location === 'string') {
    tempArray = listStudents.filter((student) => student.location === location);
  }
  return tempArray;
}
