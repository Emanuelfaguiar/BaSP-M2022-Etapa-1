console.log('01-Variables and Operators');
/* A)   Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
        3er variable.*/
console.log('Exercise A');

var number1 = 10;
console.log('1st number: ' + number1);
var number2 = 15;
console.log('2nd number: ' + number2);

var result = number1 + number2;
console.log("The sum's result is: " + result);

// B)   Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('Exercise B');

var name1 = 'Emanuel ';
console.log('Name: ' + name1);
var lastname = 'Aguiar';
console.log('Lastname: ' + lastname);

var wholeName = name1 + lastname;
console.log('Strings linked: ' + wholeName);

/* C)   Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
        resultado de la suma en una 3er variable (utilizar length).*/
console.log('Exercise C');

var string1 = 'My name is ';
console.log('1st String: ' + string1)
var string2 = 'Emanuel';
console.log('2nd String: ' + string2)

var wholeString = string1.length + string2.length;

console.log('The string lenght is: ' + wholeString);


