//var
var firstName; // declarando
firstName = 'Jorge'; // asignando
console.log(firstName);

var lastName = 'Molina'; // declarando y asignando
lastName = 'Vega'; // reasignando
console.log(lastName);

var secondName = 'Carlos';// declarando y asignando
var secondName = 'Luis'; // reasignando
console.log(secondName);

//let
let fruit = 'Apple'; // declarando y asignando
fruit = 'Kiwi'; // reasignando
console.log(fruit);

let fruit = 'Banana'; // redeclarando - esto no es posible con let - SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit);

//const
const animal = 'Dog'; // declarando y asignando
//animal = 'Bird'; // reasignando - esto no es posible con const - TypeError: Assignment to constant variable.
console.log(animal);
const animal = 'Snake'; // reasignando - SyntaxError: Identifier 'animal' has already been declared
console.log(animal);

const vehiculos = []; // declarando un array
vehiculos.push['Audi'];
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos);
//Como se trata de un arreglo, en este caso si es posible agregar o eliminar elementos del array porque en realidad no se esta reasignando el valor a la variable, se estan quitando y poniendo elementos al array 