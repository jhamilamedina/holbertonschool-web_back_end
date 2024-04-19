// Devuelve una matriz de objetos ubicados en una ciudad específica.
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

// Función para obtener estudiantes por ubicación
function getStudentsByLocation(students, city) {
  // Usar la función filter para filtrar estudiantes por ciudad
  const studentsInCity = students.filter(student => student.city === city);
  return studentsInCity;
}

