function greeting(){
    let userName = 'Jorge';

    function displayUserName(){
        return `Hola ${userName}, ¿como vas?`
    }
    return displayUserName
}

const g = greeting();
console.log(g); // Aqui se esta retornando la funcion 'displayUserName'
console.log(g()); // Aqui se ejecuta la funcion