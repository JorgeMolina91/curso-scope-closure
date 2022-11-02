function greeting(){
    let userName = 'Jorge';
    console.log(userName);

    if (userName === 'Jorge'){
        console.log(`Hola ${userName}!`)
    }
}

greeting();
// Todas las funciones tiene su propio alcance. Las variables declaradas dentro de una funcion son accesibles solamente dentro de la misma funcion y desde sus funciones anidadas.

console.log(userName); // Aqui sale un error al querer llamar esta variable 'userName' porque el alcance es solamente dentro de la funcion, y aqui se esta llamando desde afuera 




