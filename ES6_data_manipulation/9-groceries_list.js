// Crear una funcion llamada groceriesList que devuelva un mapa de comestibles
export default function groceriesList() {
  const groceryMap = new Map();

  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);

  return groceryMap;
}
