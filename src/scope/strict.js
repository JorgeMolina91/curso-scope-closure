pi = 3.1416 // asignando un valor a una variable sin declarar
console.log(pi);
//Aqui lo que hizo JS es que hizo hoisting de la variable pi y la declaro al principio como 'var pi = undefined', luego le asigno el valor que ya habiamos puesto y ahi si lo imprimio

'use strict'
pi = 3.1416 // asignando un valor a una variable sin declarar - ReferenceError: pi is not defined
console.log(pi);
//Aqui evidentemente no funciona el hoisting, por lo que con el 'use strict' se debe declarar la variable para poder acceder a ella

function myFunction(){
    'use strict'
    return pi = 3.1416; // ReferenceError: pi is not defined
}
myFunction();
