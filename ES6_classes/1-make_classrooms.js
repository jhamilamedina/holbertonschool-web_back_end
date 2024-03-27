import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const rooms = [];

  // Creamos tres instancias de ClassRoom con los tamaños dados y las agregamos a la matriz
  rooms.push(new ClassRoom(19));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));

  // Devolvemos la matriz con los objetos ClassRoom inicializados
  return rooms;
}
