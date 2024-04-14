// Escribir la función guardrail y definir el parámetro
export default function guardrail(mathFunction) {
  // Dentro de la función, crear un array llamado queue
  const queue = [];
  // Ejecutar la función mathFunction y manejar los resultados y errores
  try {
    const result = mathFunction(); // Ejecutar la función mathFunction
    queue.push(result); // Agregar el resultado a la cola
  } catch (Error) {
    queue.push('Error: cannot divide by 0'); // Agregar el mensaje de error a la cola si ocurre un error
  } finally {
    queue.push('Guardrail was processed'); // Agregar el mensaje "Guardrail was processed" a la cola
  }
  // Devolver la queue después de que se haya ejecutado la función mathFunction
  return queue;
}
