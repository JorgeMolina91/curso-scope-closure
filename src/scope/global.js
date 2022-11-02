//Variables

var a; //Declarando una variable
var b = 'b'; //Declaramos y asignamos una variable
var b = 'bb'; //Reasignando el valor una variable
var a = 'aa'; //Redeclaracion de la variable

/*
Global Scope
Cualquier variables que se encuentre en el documento de nuestro aplicativo, pasan a ser variables locales, es decir, que no estan declaradas dentro de ninguna funcion, objeto y demas, y se instancian en el objeto window, por lo que se puede acceder desde cualquier lado a estas variables
*/
var fruit = 'apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'colombia'; // esta es una variable que no ha sido declarada en ningun lugar, y por consiguiente, queda como una variable global
    console.log(country);
}
countries();
console.log(country);