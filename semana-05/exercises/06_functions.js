console.log('06-Functions');
/* A) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log('Exercise A:');

function sum (number1, number2){
    return number1 + number2;
}

var result = sum(8,15);
console.log('Result: ' + result);
/* B) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
console.log('Exercise B');

function sumValidation(number1, number2){
    if (isNaN(number1) == true || isNaN(number2) == true){
        alert("Parameter's ERROR");
        return NaN;
    }
    else{
        return number1 + number2;
    }
}

// Valid
console.log(sumValidation(8, 6));

// Invalid
console.log(sumValidation(5, 'g'));

// Valid
console.log(sumValidation(10, 7));

// Invalid
console.log(sumValidation('*', 's'));

// Valid
console.log(sumValidation(2, 9));

// Invalid
console.log(sumValidation('+', 4));


// C) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('Exercise C');

function validateInteger(number){
    if(number == Math.floor(number)){
        return true;
    }
    else{
        return false;
    }
}

//True
console.log(validateInteger(5));

//False
console.log(validateInteger(5.5));

/* D) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que
haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
console.log('Exercise D');

function sumValidation(number1, number2){
    if (isNaN(number1) == true || isNaN(number2) == true){
        alert("Parameter's ERROR");
        return NaN;
    }
    else if (number1 == Math.floor(number1) && number2 && Math.floor(number2)){
        return number1 + number2;
    }
    else{
        alert('ERROR: float number');
        return [Math.round(number1), Math.round(number2)];
    }
}

// Valid
console.log(sumValidation(8, 6));

// Invalid
console.log(sumValidation(5, 'g'));

// Invalid
console.log(sumValidation('*', 's'));

// Invalid
console.log(sumValidation('+', 4));

// Invalid
console.log(sumValidation(10.8, 7));

// Invalid
console.log(sumValidation(2.9853, 9.1756));


/* E) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/
console.log('Exercise E');
