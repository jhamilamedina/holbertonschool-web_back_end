// Definimos una clase llamada ClassRoom
class ClassRoom {
    // Constructor: Llama automaticamente a la clase
    // Definimos el atributo maxStudentsSize
    constructor(maxStudentsSize) {
        // this: Hace referencia al objeto actual que se crea
        // Asignamos un valor a la propiedad _maxStudentsSize
        this._maxStudentsSize = maxStudentsSize;
    }
}

// Exportamos la clase para que esté disponible fuera de el archivo
export default ClassRoom;