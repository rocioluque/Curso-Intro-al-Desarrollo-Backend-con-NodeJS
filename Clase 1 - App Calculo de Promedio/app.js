const readLineSync = require("readline-sync");

const calcularPromedio = () =>{ 
    const cantidadNumeros = readLineSync.question("Ingresar la cantidad de numeros a ingresar: ")  
    const numeros=[];  

    for(let i = 0; i < cantidadNumeros; i++){   
        const numeroIngresado = readLineSync.question(`Ingresar el numero ${i}: `);  
        const numero = parseInt(numeroIngresado);  

        if(!isNaN(numero)) { 
            numeros.push(numero); 
        } else { 
            const numeroValido = readLineSync.question("Por favor, ingrese un número válido. Intentelo de nuevo."); 
            i--;  
        }   
    }  
    let suma = 0;  

    for(let i = 0; i < numeros.length; i++){  
        suma += numeros[i];  
    }  

    const promedio = suma / numeros.length; 

    const numerosIngresados = readLineSync.question("Los números ingresados son: " + numeros.join(', ')); 
    const resultadoSuma = readLineSync.question("El resultado de la suma es: " + suma); 

    return promedio;  
}  
let resultado = calcularPromedio(); 
const resultadoPromedio = readLineSync.question("El resultado del promedio es: " + resultado); 