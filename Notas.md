# Closures y Scope

## Que es el Scope
Es el alcance que determina la accesibilidad de las variables... Desde donde son visibles y se puede interactuar con ellas y desde donde no.

En JS, los objetos y las funciones también son variables!!!

El Scope determina la accesibilidad de variables, objetos y funciones desde diferentes partes del codigo


> **npm init -y** Este comando me genera un json que identifica mi archivo


**Tipos de Scope**

### Global
Son las variables que se asignan en el documento, es decir, que no están dentro de ninguna funcion, objeto, etc.
Cuando se asigna una variable dentro de una funcion sin declararla **country = colombia** pasa a ser una variable global, por lo que hay que tener mucho cuidado con esta forma de asignar variables.

### Function
Son las variables declaradas dentro de una funcion, y son accesibles solamente dentro de la misma funcion y desde sus funciones anidadas (ciclos, loops, etc.)

### Block
Son las variables declaradas dentro de un bloque (Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}). El scope local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un bloque de código del programa. 
 
 