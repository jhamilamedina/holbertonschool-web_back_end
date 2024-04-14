// Escribir la función guardrail y definir el parámetro
export default function guardrail(mathFunction) {
  // Dentro de la función, crear un array llamado queue
  let queue = [];
  // Ejecutar la función mathFunction y manejar los resultados y errores
  try {
    let result = mathFunction(); // Ejecutar la función mathFunction
    queue.push(result); // Agregar el resultado a la cola
  } catch (error) {
    queue.push(error.message); // Agregar el mensaje de error a la cola si ocurre un error
  } finally {
    queue.push('Guardrail was processed'); // Agregar el mensaje "Guardrail was processed" a la cola
  }
  // Devolver la queue después de que se haya ejecutado la función mathFunction y se haya agregado a la cola
  return queue;
}