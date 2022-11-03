const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //funcion interna - closure
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();
//El ambito lexico es el lugar desde donde se tiene acceso a las variables, dependiendo de la ubicacion de estas...