print = console.log;


let arr, arr1, arr2, result;


print("1. push(element1, element2, ...): Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.");
arr = [1, 2, 3, 4, 5];
print(arr.push(6, 7)); // Devuelve 7
print(arr); // Devuelve [1, 2, 3, 4, 5, 6, 7]

print("2. pop(): Elimina el último elemento del array y lo devuelve.");
arr = [1, 2, 3, 4, 5];
print(arr.pop()); // Devuelve 5
print(arr); // Devuelve [1, 2, 3, 4]

print("3. shift(): Elimina el primer elemento del array y lo devuelve.");
arr = [1, 2, 3, 4, 5];
print(arr.shift()); // Devuelve 1
print(arr); // Devuelve [2, 3, 4, 5]

print("4. unshift(element1, element2, ...): Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.");
arr = [2, 3, 4, 5];
print(arr.unshift(0, 1)); // Devuelve 6
print(arr); // Devuelve [0, 1, 2, 3, 4, 5]

print("5. slice(startIndex, endIndex): Devuelve una copia superficial de una porción del array en un nuevo array.");
arr = [0, 1, 2, 3, 4, 5];
result = arr.slice(2, 5);
print(result); // Devuelve [2, 3, 4]

print("6. splice(startIndex, deleteCount, item1, item2, ...): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.");
arr = [0, 1, 2, 3, 4, 5];
print(arr.splice(2, 2, "a", "b")); // Devuelve [2, 3]
print(arr); // Devuelve [0, 1, "a", "b", 4, 5]

print("7. concat(array1, array2, ...): Combina dos o más arrays y devuelve un nuevo array.");
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
result = arr1.concat(arr2);
print(result); // Devuelve [1, 2, 3, 4, 5, 6]

print("8. join(separator): Une todos los elementos de un array en una cadena usando un separador especificado.");
arr = [1, 2, 3, 4, 5];
result = arr.join("-");
print(result); // Devuelve "1-2-3-4-5"

print("9. reverse(): Invierte el orden de los elementos en un array.");
arr = [1, 2, 3, 4, 5];
arr.reverse();
print(arr); // Devuelve [5, 4, 3, 2, 1]

print("10. sort(compareFunction): Ordena los elementos de un array en su lugar y devuelve el array.");
arr = [1, 5, 3, 2, 4];
arr.sort((a, b) => a - b); // sort ascendente
print(arr); // Devuelve [1, 2, 3, 4, 5]
arr.sort((a, b) => b - a); // sort descendente
print(arr); // Devuelve [5, 4, 3, 2, 1]

print("11. indexOf(element, startIndex): Devuelve el primer índice en el que se encuentra un elemento en el array, o -1 si no se encuentra.");
arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
print(arr.indexOf(3)); // Devuelve 2

print("12. lastIndexOf(element, startIndex): Devuelve el último índice en el que se encuentra un elemento en el array, o -1 si no se encuentra.");
arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
print(arr.lastIndexOf(3)); // Devuelve 6

print("13. includes(element, startIndex): Comprueba si un elemento está presente en el array y devuelve true o false.");
arr = [1, 2, 3, 4, 5];
print(arr.includes(3)); // Devuelve true

print("14. forEach(callback(element, index, array)): Ejecuta una función en cada elemento del array.");
arr = [1, 2, 3, 4, 5];
arr.forEach(element => print(element));

print("15. map(callback(element, index, array)): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.");
arr1 = [1, 2, 3, 4, 5];
arr2 = arr1.map(element => element * 2);
print(arr2); // Devuelve [2, 4, 6, 8, 10]

print("16. filter(callback(element, index, array)): Crea un nuevo array con todos los elementos que cumplan una condición especificada en una función.");
arr = [1, 2, 3, 4, 5];
result = arr.filter(element => element > 3);
print(result); // Devuelve [4, 5]

print("17. reduce(callback(accumulator, element, index, array), initialValue): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.");
arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accumulator, element) => accumulator + element, 0);
print(sum); // Devuelve 15

print("18. every(callback(element, index, array)): Comprueba si todos los elementos del array cumplen una condición especificada en una función.");
arr = [1, 2, 3, 4, 5];
result = arr.every(element => element > 0);
print(result); // Devuelve true

print("19. some(callback(element, index, array)): Comprueba si al menos un elemento del array cumple una condición especificada en una función.");
arr = [1, 2, 3, 4, 5];
result = arr.some(element => element > 4);
print(result); // Devuelve true

print("20. find(callback(element, index, array)): Devuelve el primer elemento del array que cumple una condición especificada en una función.");
arr = [1, 2, 3, 4, 5];
result = arr.find(element => element > 3)
print(result); // Devuelve 4

print("21. findIndex(callback(element, index, array)): Devuelve el índice del primer elemento del array que cumple una condición especificada en una función.");
arr = [1, 2, 3, 4, 5];
result = arr.findIndex(element => element > 3)
print(result); // Devuelve 3

print("22. fill(value, startIndex, endIndex): Rellena todos los elementos del array con un valor especificado.");
arr = [1, 2, 3, 4, 5];
result = arr.fill(0, 2, 4);
print(result); // Devuelve [1, 2, 0, 0, 5]

print("23. flat(depth): Crea un nuevo array con todos los elementos de sub-array concatenados de forma recursiva hasta la profundidad especificada.");
arr = [1, [2, [3, [4]]]];
result = arr.flat(2);
print(result); // Devuelve [1, 2, 3, 4]

print("24. flatMap(callback(element, index, array)): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array y luego aplanar el resultado en un nuevo array.");
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = nestedArray.flatMap(arr => arr);
print(flatArray); // Devuelve [1, 2, 3, 4, 5, 6]

print("25. toString(): Convierte un array en una cadena de texto separada por comas.");
arr = [1, 2, 3, 4, 5];
print(arr.toString()); // Devuelve "1,2,3,4,5"

print("26. isArray(value): Comprueba si un valor es un array.");
arr = [1, 2, 3, 4, 5];
print(Array.isArray(arr)); // Devuelve true