print = console.log;


let str, str1, str2;


print("1. charAt(index): Devuelve el carácter en la posición especificada.");
str = "Hola Mundo";
print(str.charAt(1)); // Devuelve "o"

print("2. charCodeAt(index): Devuelve el valor Unicode del carácter en la posición especificada.");
str = "Hola Mundo";
print(str.charCodeAt(0)); // Devuelve 72 (valor Unicode de "H")

print("3. concat(str1, str2, ..., strX): Combina dos o más cadenas y devuelve una nueva cadena.");
str1 = "Hola";
str2 = "Mundo";
print(str1.concat(" ", str2)); // Devuelve "Hola Mundo"

print("4. endsWith(searchString, length): Comprueba si una cadena termina con el valor especificado.");
str = "Hola Mundo";
print(str.endsWith("Mundo")); // Devuelve true

print("5. includes(searchString, position): Comprueba si una cadena contiene el valor especificado.");
str = "Hola Mundo";
print(str.includes("Mundo")); // Devuelve true

print("6. indexOf(searchValue, fromIndex): Devuelve el índice de la primera aparición del valor especificado en una cadena.");
str = "Hola Mundo";
print(str.indexOf("Mundo")); // Devuelve 5

print("7. lastIndexOf(searchValue, fromIndex): Devuelve el índice de la última aparición del valor especificado en una cadena.");
str = "Hola Mundo";
print(str.lastIndexOf("o")); // Devuelve 9

print("8. match(regexp): Busca una cadena para obtener una coincidencia con una expresión regular.");
str = "Hola Mundo";
print(str.match(/Mundo/)); // Devuelve ["Mundo"]

print("9. replace(searchValue, replaceValue): Reemplaza una parte de una cadena con otra cadena o valor.");
str = "Hola Mundo";
print(str.replace("Mundo", "Amigo")); // Devuelve "Hola Amigo"

print("10. search(regexp): Busca una cadena para obtener una coincidencia con una expresión regular y devuelve la posición de la coincidencia.");
str = "Hola Mundo";
print(str.search(/Mundo/)); // Devuelve 5

print("11. slice(startIndex, endIndex): Extrae una parte de una cadena y devuelve una nueva cadena.");
str = "Hola Mundo";
print(str.slice(5, 10)); // Devuelve "Mundo"

print("12. split(separator, limit): Divide una cadena en un array de subcadenas en función de un separador.");
str = "Hola Mundo";
print(str.split(" ")); // Devuelve ["Hola", "Mundo"]

print("13. startsWith(searchString, position): Comprueba si una cadena comienza con el valor especificado.");
str = "Hola Mundo";
print(str.startsWith("Hola")); // Devuelve true

print("14. substr(startIndex, length): Extrae una parte de una cadena, comenzando en el índice especificado y con una longitud determinada.");
str = "Hola Mundo";
print(str.substr(5, 5)); // Devuelve "Mundo"

print("15. substring(startIndex, endIndex): Extrae los caracteres de una cadena entre dos índices especificados.");
str = "Hola Mundo";
print(str.substring(5, 10)); // Devuelve "Mundo"

print("16. toLocaleLowerCase(): Convierte una cadena a minúsculas según las convenciones de localización.");
str = "Hola Mundo";
print(str.toLocaleLowerCase()); // Devuelve "hola mundo"

print("17. toLocaleUpperCase(): Convierte una cadena a mayúsculas según las convenciones de localización.");
str = "Hola Mundo";
print(str.toLocaleUpperCase()); // Devuelve "HOLA MUNDO"

print("18. toLowerCase(): Convierte una cadena a minúsculas.");
str = "Hola Mundo";
print(str.toLowerCase()); // Devuelve "hola mundo"

print("19. toUpperCase(): Convierte una cadena a mayúsculas.");
str = "Hola Mundo";
print(str.toUpperCase()); // Devuelve "HOLA MUNDO"

print("20. trim(): Elimina los espacios en blanco al principio y al final de una cadena.");
str = "   Hola Mundo   ";
print(str.trim()); // Devuelve "Hola Mundo"

print("21. valueOf(): Devuelve el valor primitivo de una cadena.");
str = "Hola Mundo";
print(str.valueOf()); // Devuelve "Hola Mundo"

print("22. repeat(count): Devuelve una nueva cadena que contiene la cadena original repetida el número de veces especificado.");
str = "Hola";
print(str.repeat(3)); // Devuelve "HolaHolaHola"

print("23. trimStart(): Elimina los espacios en blanco al principio de una cadena.");
str = "   Hola Mundo";
print(str.trimStart()); // Devuelve "Hola Mundo"

print("24. trimEnd(): Elimina los espacios en blanco al final de una cadena.");
str = "Hola Mundo   ";
print(str.trimEnd()); // Devuelve "Hola Mundo"

print("25. padStart(targetLength, padString): Rellena una cadena al principio con un carácter especificado hasta alcanzar la longitud deseada.");
str = "Hola";
print(str.padStart(10, "x")); // Devuelve "xxxxxxHola"

print("26. padEnd(targetLength, padString): Rellena una cadena al final con un carácter especificado hasta alcanzar la longitud deseada.");
str = "Hola";
print(str.padEnd(10, "x")); // Devuelve "Holaxxxxxx"

print("27. startsWith(searchString, position): Comprueba si una cadena comienza con el valor especificado.");
str = "Hola";
print(str.startsWith("Ho")); // Devuelve true

print("28. endsWith(searchString, length): Comprueba si una cadena termina con el valor especificado.");
str = "Hola";
print(str.endsWith("la")); // Devuelve true

print("29. toString(): Devuelve una cadena que representa el objeto especificado.");
str = "Hola";
print(str.toString()); // Devuelve "Hola"

print("30. length: Propiedad que devuelve la longitud de una cadena.");
str = "Hola";
print(str.length); // Devuelve 4