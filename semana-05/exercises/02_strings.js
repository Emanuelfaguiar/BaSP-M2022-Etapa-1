console.log('02-Strings');
// A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('Exercise A');

var string1 = 'radium rocket basp-week-05';
console.log('String in lowercase: ' + string1);
string1 = string1.toUpperCase();
console.log('String in UPPERCASE: ' + string1);


/* B) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracter
es guardando el resultado en una nueva variable (utilizar substring).*/
console.log('Exercise B');

var wholeString = 'Radium Rocket';
console.log('The whole string is: ' + wholeString);
var halfString = wholeString.substring(0,5);

console.log('The substring is: ' + halfString);


/* C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
 guardando el resultado en una nueva variable (utilizar substring).*/
 console.log('Exercise C');

 var wholeString2 = 'Radium Rocket';
 console.log('The whole string is: ' + wholeString2);
 var halfString2 = wholeString2.substring(10,13);
 
 console.log('The substring is: ' + halfString2);


 /* D) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/
console.log('Exercise D');

var string2 = 'motoneurona';
console.log('String in lowercase: ' + string2);
var string2Modified = string2.toUpperCase();
string2 = string2Modified.substring(0,1);
string2Modified = string2Modified.substring(1,11).toLowerCase();
string2Modified = string2 + string2Modified;

console.log('String with the first letter in Uppercase: ' + string2Modified);

/* E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('Exercise E');

var nameSpace = 'Radium Rocket';
console.log('String: ' + nameSpace);
var blanckSpace = nameSpace.indexOf(' ');

console.log('Blank space position: ' + blanckSpace);

/* F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('Exercise F');

var longString = 'javascript exercise';
console.log('String in lowercase: ' + longString);
var upperString = longString.toUpperCase ();

var longStringModified = upperString[upperString.indexOf('J')] + longString.substring(1,10).toLocaleLowerCase() + ' ' +
upperString[upperString.indexOf('E')] + longString.substring(12,19).toLocaleLowerCase();

console.log('String with the firsts letters in Uppercase: ' + longStringModified);