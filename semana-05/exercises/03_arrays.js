console.log('03-Arrays');
var months = ["Enero", " Febrero", " Marzo", " Abril", " Mayo", " Junio", " Julio", " Agosto", " Septiembre", " Octubre", 
" Noviembre", " Diciembre"];
console.log('Meses: ' + months);

/* A) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log('Exercise A');

console.log('Months 5 and 11: ' + months[4] + ' and' + months[10]);

// B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('Exercise B');

months.sort();
console.log('Array ordeined: ' + months);

// C) Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('Exercise C');

var months = [" Enero", " Febrero", " Marzo", " Abril", " Mayo", " Junio", " Julio", " Agosto", " Septiembre", " Octubre", 
" Noviembre", " Diciembre"];

months.unshift("Year-beginning");
months.push(" Year-end");

console.log('Added elements: ' + months);

// D) Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('Exercise D');

months.shift();
months.pop();

console.log('Eliminated elementes: ' + months);

// E) Invertir el orden del array (utilizar reverse).
console.log('Exercise E');

months.reverse();
console.log('Reverse: ' + months);

// F) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('Exercise F');

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];

monthsJoin = months.join('-');
console.log('Join: ' + monthsJoin);

// G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('Exercise G');

monthsPart = months.slice(4,11);
console.log('Months sliced from may to november: ' + monthsPart);