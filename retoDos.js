/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

/*Operadores aritméticos*/
let suma = 5 + 5;
let resta = 10 - 5;
let mult = 5 * 5;
let div = 10 / 5;
let pot = 5 ** 2;
let sum = ++pot;
let rest = --pot;
let module = 25 % 5;
console.log(rest);

/*Operadores lógicos*/

let and = 5 > 0 && 10 < 20;
let or = 5 > 0 || 20 < 10;

/*Operadores de identidad*/

5 === 5;
5 == "5";
5 !== 6;

/*Operadores de comparación*/
5 > 2;
6 < 10;
10 >= 10;
5 <= 8;
