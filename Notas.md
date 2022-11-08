# Closures y Scope

## Que es el Scope
Es el alcance que determina la accesibilidad de las variables... Desde donde son visibles y se puede interactuar con ellas y desde donde no.

En JS, los objetos y las funciones también son variables!!!

El Scope determina la accesibilidad de variables, objetos y funciones desde diferentes partes del codigo


> **npm init -y** Este comando me genera un json que identifica mi archivo


## Tipos de Scope

**Global**
Son las variables que se asignan en el documento, es decir, que no están dentro de ninguna funcion, objeto, etc.
Cuando se asigna una variable dentro de una funcion sin declararla **country = colombia** pasa a ser una variable global, por lo que hay que tener mucho cuidado con esta forma de asignar variables.

**Function**
Son las variables declaradas dentro de una funcion, y son accesibles solamente dentro de la misma funcion y desde sus funciones anidadas (ciclos, loops, etc.)

**Block**
Son las variables declaradas dentro de un bloque (Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}). El scope local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa. 
 
## Reasignación y redeclaración
> var a; //Declarando una variable

> var a = 'aa'; //Redeclaracion de la variable

> var b = 'b'; //Declarando y asignando una variable

> var b = 'bb'; //Reasignando el valor una variable

La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

- Una variable declarada con ***var*** puede ser redeclarada y reasignada.
- Una variable declarada con ***let*** puede ser reasignada, pero no redeclarada.
- Una variable declarada con ***const*** no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

```javascript
// Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
const nombre // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

```

## Strict Mode
El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

El modo estricto tiene varios cambios en la semántica normal de JavaScript:
1. Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
2. Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
3. Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.


## Que es Closure
- Un closure permite acceder al scope o ambito de una función exterior desde una función interior. En JS los closures se crean cada vez que una funcion es creada.
- A diferenecia de las variables, funciones, etc. Los closures no son siempre utilizados.
- Un closure es cuando una función accede a una variable fuera de su contexto.
- Al trabajar con closures entra en juego el concepto de alcance de las variables.



### Construcción de un closure
Para construir un closure necesitaremos los siguientes requisitos:
```javascript
function padre() {
    
    function hijo(){
    }
}
```

Una variable que se encuentre en la función con el scope superior, donde la función con scope inferior la utilice.
```javascript
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
}
```

Invocar la función con scope inferior en otro scope (el scope superior) del que fue escrita. Esto lo podemos hacer retornando la función entera y asignar la función de scope superior a una variable.
```javascript
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
    
    return hijo
}
const closure = padre()
```
De esta manera obtendremos una función (scope inferior) que tiene una referencia a la variable que se encontraba en un scope superior, que a su vez recordará el contexto donde fue creada.


## ¿Qué es el Hoisting?
Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con ***var***.


## Debugging
Debugging es el término para solucionar bugs. Los bugs (“bichos” en inglés) son errores en la aplicación, saber cómo solucionarlos de manera eficiente es clave para tu desarrollo como profesional.
Todo navegador dispone de Dev tools o herramientas de desarrollador, que es un conjunto de características del código de la página web, una de estas es el debugging.

**Código de ejemplo**
El código de ejemplo que se usará en las Dev Tools será el siguiente:
```Javascript
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
  }
}

hello() //undefined 
```

**Palabra reservada debugger**
La palabra reservada debugger sirve para detener la ejecución del programa, pero solo funciona si el panel de las herramientas de desarrollo está abierto. Este panel te mostrará información sobre el código hasta la línea del debugger.

Ejecuta el código de prueba que contenga la palabra reservada debugger en la consola de tu navegador, puedes hacerlo en una página en blanco tan solo poniendo about:blank como una URL.

```Javascript
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging
  }
}

hello()
```