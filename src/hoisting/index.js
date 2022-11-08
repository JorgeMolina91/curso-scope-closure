//var nameOfDog;  -> undefined
console.log(nameOfDog);
var nameOfDog = 'Elmo';// undefined
console.log(nameOfDog);// Elmo 
// En este caso lo que pasa es que, como se asigno un valor a la variable despues de usarla, lo que hace JS es que eleva a la variable y, por defecto la pone arriba del console.log como 'var nameOfDog;' que seria undefined por defecto

_____________________
//var elmo; -> undefined

// function nameOfDog(){
//     console.log(`El mejor perrito es ${elmo}`);//El mejor perrito es undefined 
// } Aqui se eleva la funcion porque se llamo antes de ser declarada

nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);//El mejor perrito es undefined 
}

var elmo = 'Elmito';
//La variable 'elmo' se elevó antes de llamar a la funcion 'nameOfDog()' y se declaro, por lo que quedo undefined. la funcion tambien se eleva porque cuando la llamamos, aun no ha sido creada.

________________________
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);//El mejor perrito es undefined 
}
// Si solo llamamos a la funcion y a la variable, pero no declaramos la variable, abria un error de referencia: 'ReferenceError: elmo is not defined'