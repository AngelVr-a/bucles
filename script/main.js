/*EJERCICIO 1*/
/*
let num = prompt("Dame un numero para hacer la tabla de multiplicar: ")
for (let index = 1; index <= 10; index++) {
    let multi = index * num
    console.log("La multiplicacion: ", index, "x", num, " = ", multi);
    }
*/
/*EJERCICIO 1*/

/*EJERCICIO 2*/
/*
let num = 1
let acum = 0
while (num > 0) {

    num = parseInt( prompt("Dame un numero para hacer la tabla de multiplicar: "))
    acum = acum + num
    console.log("Numero dado en esta ronda:", num);
}
console.log("Acumulado:",acum);
*/
/*EJERCICIO 2*/

/*EJERCICIO 3*/
/*
let adivinanza = 33
let num = 0
while (num < adivinanza || num > adivinanza) {
     num = parseInt(prompt("Trata de adivinar el numero: "))
    if (num < adivinanza) {
        alert("El numero es menor prueba de nuevo")
    }
    else{
        if(num > adivinanza)
        alert("El numero es mayor prueba de nuevo")
    }
}
alert("Felicidades has ganado")
*/
/*EJERCICIO 3*/

/*EJERCICIO 4*/
/*
let numero = parseInt(prompt("Dame el numero y te dire si es primo o no: "))
function esPrimo(numero) {
    // Los números menores que 2 no son primos
    if (numero < 2) {
        return false;
    }
    
    // Solo necesitamos verificar hasta la mitad del número
    let limite = Math.floor(numero / 2);

    for (let i = 2; i <= limite; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("El numero es primo: ",esPrimo(numero));
*/
/*EJERCICIO 4*/

/*EJERCICIO 5*/
/*
let num = parseInt(prompt("Dame el numero para darte todos los divisores del mismo:"))

for (let index = 1; index <= num; index++) {
    if ((num % index) === 0 ) 
        {
        console.log("Divisible entre: ",index);
    }
    
}
*/
/*EJERCICIO 5*/

/*EJERCICIO 6*/
/*
let numeros = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
    
}
*/
/*EJERCICIO 6*/

/*EJERCICIO 7*/
/*
let numeros = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]*numeros[index]);
}
*/
/*EJERCICIO 7*/

/*EJERCICIO 8*/
/*
let familia = [
    {nombre: 'Juan', edad: 35, parentesco: 'Padre', ocupacion: 'Ingeniero'},
    {nombre: 'Ana', edad: 32, parentesco: 'Madre', ocupacion: 'Doctora'},
    {nombre: 'Carlos', edad: 12, parentesco: 'Hijo', ocupacion: 'Estudiante'},
    {nombre: 'Marta', edad: 8, parentesco: 'Hija', ocupacion: 'Estudiante'},
    {nombre: 'Luis', edad: 60, parentesco: 'Abuelo', ocupacion: 'Jubilado'}
];

familia.forEach(persona => {
    console.log(`Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.parentesco} y trabajo como ${persona.ocupacion}.`);
});
*/
/*EJERCICIO 8*/ 

/*EJERCICIO 9 */
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(numero => {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
});
*/
/*EJERCICIO 9 */

/*EJERCICIO 10 */
/*
let pares = 0;
let impares = 0;
let numero;

do {
    numero = parseInt(prompt("Ingrese un número (0 para terminar): "), 10);
    if (numero % 2 === 0 && numero !== 0) {
        pares += numero;
    } else if (numero % 2 !== 0) {
        impares += numero;
    }
} while (numero !== 0);

console.log(`Suma de números pares: ${pares}`);
console.log(`Suma de números impares: ${impares}`);
*/
/*EJERCICIO 10 */

/*EJERCICIO 11 */
/*
let numeros = [5, 3, 8, 1, 9, 12, 7, 10, 2, 6];

let max = numeros[0];
numeros.forEach(numero => {
    if (numero > max) {
        max = numero;
    }
});

console.log(`El número más grande es: ${max}`);
*/
/*EJERCICIO 11 */

/*EJERCICIO 12 */
/*
let numeros = [5, 3, 8, 1, 9, 12, 7, 10, 2, 6];

let min = numeros[0];
numeros.forEach(numero => {
    if (numero < min) {
        min = numero;
    }
});

console.log(`El número más pequeño es: ${min}`);
*/
/*EJERCICIO 12 */

/*EJERCICIO 14 */
/*
for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}
*/
/*EJERCICIO 14*/

/*EJERCICIO 15*/
/*
for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));
}
*/
/*EJERCICIO 15*/