/*Manipulación de un array
Tome el siguiente array:
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];
Manipule su array utilizando varios métodos, como pop(), push(), shift() y unshift(), y transfórmelo en lo siguiente:

["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

El método unshift() agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.

sugerencia

• Eliminar el primer elemento y el último elemento.
• Agregue FIRST al inicio de la matriz.
• Asigne hola mundo al valor del cuarto elemento.
• Asigne MEDIO al tercer valor de índice.
• Agregue ÚLTIMO a la última posición en la matriz.
• Enviarlo a la consola.*/

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];
theList.pop(); // Elimina el primer elemento.
theList.shift(); // Elimina el ultimo elemento.
theList.unshift("FIRST"); // Arega al inicio de la matriz.
theList[3] = "hola ninjas!"; // Agrega un elemento a la cuarta posicion.
theList.splice(2, 1, "MEDIO"); // Agregar un elemento en la tercera posición (2: define la posición, 1 elimina un elemento y aparte agrega un string).
theList.splice(4, 2); // Borra dos elementos desde la cuarta posicion.
theList.push("ULTIMO"); // Agrega a la ultima posición.
console.log(theList);