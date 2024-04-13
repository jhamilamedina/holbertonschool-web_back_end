export default function divideFunction(numerator, denominator) {
  // Declarar una condicional si denominador = 0
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    // Si no es 0 calcular y devvolver el resultado
    return numerator / denominator;
  }
}
