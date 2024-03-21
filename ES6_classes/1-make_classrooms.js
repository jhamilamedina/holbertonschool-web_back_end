// Importamos la clase ClassRoom del file 0-classroom.js.
import ClassRoom from "./0-classroom.js";

// Implementamos una función initializeRooms
function initializeRooms() {
    const rooms = [];

    // Creamos 3 instancias y los agregamos a la matriz
    rooms.push(new ClassRoom(19));
    rooms.push(new ClassRoom(20));
    rooms.push(new ClassRoom(34));

    // Devolvemos la matriz
    return rooms;
}
console.log(initializeRooms);