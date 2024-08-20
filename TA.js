//Manupulacion de Cadenas

// Función para repetir una cadena de texto un número determinado de veces
function repeatString(texto, repeticiones) {
    const container = document.getElementById('parte1');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos elementos
    for (let i = 0; i < repeticiones; i++) {
        const p = document.createElement('p');
        p.textContent = texto;
        container.appendChild(p);
    }
}

// Función para manejar el evento de repetir una cadena de texto
function handleRepeatString() {
    const texto = document.getElementById('texto').value;
    const repeticiones = parseInt(document.getElementById('repeticiones').value, 10);
    repeatString(texto, repeticiones);
}

// Función para invertir una cadena de texto
function reverseString(texto) {
    const container = document.getElementById('container');
    const textoInvertido = texto.split('').reverse().join('');
    const p = document.createElement('p');
    p.textContent = textoInvertido;
    container.appendChild(p);
}

// Función para manejar el evento de invertir una cadena de texto
function handleReverseString() {
    const texto = document.getElementById('textoInvertir').value;
    reverseString(texto);
}

//Procesamiento de Arreglos:

// Arreglo de libros
const books = [{ name: "Libro 1", description: "Soy description 1" }, { name: "Libro 2", description: "Soy description 2" }];

// Función para eliminar un elemento de un arreglo
function removeFromArray(arreglo, item) {
    const index = arreglo.indexOf(item);
    if (index !== -1) {
        arreglo.splice(index, 1);
    }
    return arreglo;
}

// Función para obtener los nombres de los libros de un arreglo
function getFromArray(books) {
    let aux = [];
    for (i in books) {
        aux.push(i.name)
    }
    const container = document.getElementById('resultbook');
    const h = document.createElement('titulos');
    h.textContent = aux;
}

//Filtrado y transformacion:

// Función para obtener los números impares de un arreglo
function getOdds(nums) {
    const oddNumbers = nums.filter(num => num % 2 !== 0);
    const container = document.getElementById('container');
    oddNumbers.forEach(num => {
        const p = document.createElement('p');
        p.textContent = num;
        p.style.color = 'violet';
        p.style.fontSize = '16px';
        container.appendChild(p);
    });
}

const duplicates = (nums) => {
    const duplicatesMap = {};
    let count = 0;
    let duplicateValue = null;

    nums.forEach(num => {
        if (duplicatesMap[num]) {
            duplicatesMap[num]++;
            if (duplicatesMap[num] === 2) {
                count++;
                duplicateValue = num;
            }
        } else {
            duplicatesMap[num] = 1;
        }
    });

    const container = document.getElementById('container');
    const h4 = document.createElement('h4');
    h4.textContent = `Valor duplicado: ${duplicateValue}`;
    container.appendChild(h4);

    const p = document.createElement('p');
    p.textContent = `Cantidad de veces duplicado: ${count}`;
    container.appendChild(p);
}


//Operaciones Matemáticas y Funciones de Conversión

//Suma de Rango:
// Función para calcular la suma de todos los números en un rango dado
function sumAll(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = `La suma de todos los números entre ${a} y ${b} es: ${sum}`;
    container.appendChild(p);
}

// Función para manejar el evento de calcular la suma de un rango de números
function handleSumAll() {
    const a = parseInt(document.getElementById('a').value, 10);
    const b = parseInt(document.getElementById('b').value, 10);
    sumAll(a, b);
}

//Conversión de Temperatura:

// Función para convertir una temperatura de Fahrenheit a Celsius
function convertToCelsius(temp) {
    const celsius = (temp - 32) * 5 / 9;
    return Math.round(celsius * 10) / 10;
}

// Función para convertir una temperatura de Celsius a Fahrenheit
function convertToFahrenheit(temp) {
    const fahrenheit = (temp * 9 / 5) + 32;
    return Math.round(fahrenheit * 10) / 10;
}

// Función para manejar el evento de convertir una temperatura a Celsius
function handleConvertToCelsius() {
    const temp = parseFloat(document.getElementById('temperatureF').value);
    const result = convertToCelsius(temp);
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `La temperatura en Celsius es: ${result}°C`;
}

// Función para manejar el evento de convertir una temperatura a Fahrenheit
function handleConvertToFahrenheit() {
    const temp = parseFloat(document.getElementById('temperatureC').value);
    const resultfa = convertToFahrenheit(temp);
    const resultContainer = document.getElementById('resultc');
    resultContainer.textContent = `La temperatura en Fahrenheit es: ${resultfa}°F`;
}

//Determinación de Año Bisiesto

// Función para determinar si un año es bisiesto
function anobisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Función para manejar el evento de determinar si un año es bisiesto
function handleIsLeapYear() {
    const año = parseInt(document.getElementById('año').value, 10);
    const resultContainer = document.getElementById('bisiesto');
    if (anobisiesto(año)) {
        resultContainer.textContent = 'El año es bisiesto';
    }
    else {
        resultContainer.textContent = 'El año no es bisiesto';
    }
}


// Suma de Elementos de un Arreglo
function getSum(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum;
}
const handleGetSum = () => {

}

//Generación y Búsqueda de Datos

//Generación de Contraseñas:

// Función para generar una contraseña aleatoria de una longitud dada
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
const handleGenerarContrasena =()=>{
    const contrasena = generatePassword(8);
    const resultContainer = document.getElementById('contrasena'); 
    resultContainer.textContent = `La contraseña generada es: ${contrasena}`;
} 

//Búsqueda del Más Viejo

const findTheOldest = (people) => {


}

console.log(getFromArray([{ name: "Libro 1", description: "Soy description 1" }, { name: "Libro 2", description: "Soy description 2" }]));
