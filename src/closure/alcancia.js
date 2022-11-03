function alcancia(cantidad){
    let inicial = cantidad;
    return function cantidadDos(segundaCantidad){
        inicial += segundaCantidad;
        return inicial
    }
}

let ahorro = alcancia(5);
console.log(ahorro); // Retorna la funcion 'cantidadDos'
console.log(ahorro(2)); // 7
console.log(ahorro(1)); // 8
console.log(ahorro(5)); // 13
console.log(ahorro(10)); // 23
console.log(ahorro(-20)); // 3

/*
Con esta técnica de Closures ya nos podemos evitar totalmente el uso de la palabra reservada var, ya no necesitamos una variable que sea global para almacenar un valor que vamos a usar/modificar dentro de alguna función o bloque, ahora podemos manejar y controlar una variable que solo existe dentro de la función que la va a modificar, limitando su alcance podemos evadir errores lógicos ya que si en otra función tenemos una variable con el mismo nombre, no afectará nuestra lógica y no nos dará resultados inesperados, porque literalmente será otra variable, independiente de la que creamos en nuestra primera función. 😌
.
¿Y qué pasa si yo creo una variable dentro de una función y también la quiero usar en otra función? 😰
Tranqui… existe la palabra reservada return que nos ayudará a extraer el valor de nuestra variable y colocarla en otro contexto o alcance.

*/  