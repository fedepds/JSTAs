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
const bn =  document.getElementById("botonreverse");
function reverseString(texto) 
{   
    const texto1 = document.getElementById('textoInvertir').value;
    const textoInvertido = texto1.split('').reverse().join('');
    const p = document.getElementById('salidaRepeat')
    p.innerHTML = textoInvertido;
}
bn.addEventListener("click", reverseString);


// Función para manejar el evento de invertir una cadena de texto
function handleReverseString() {
    const texto = document.getElementById('textoInvertir').value;
    console.log(texto);
    reverseString(texto);
}

//Procesamiento de Arreglos:

function removeFromArray(arreglo, item) {
    const index = arreglo.indexOf(item)
    if(index !== -1){
        arreglo.splice(index,1)
    }
    console.log(arreglo);
}
console.log(removeFromArray([1,2,3,4,5,6,7,8,9],2));


function getTheTitles(libros) {
  const titulos = libros.map(libro => libro.title);
  const contenedor = document.getElementById("ContendeorDeH1");
  titulos.forEach(titulo => {
    const h1 = document.createElement("h1");
    h1.textContent = titulo;
    contenedor.appendChild(h1);
  });
}

function mostrarTitulos() {
  const libros = [
    { title: "Harry Potter", autor: "J.K. Rowling" },
    { title: "Game of Thrones", autor: "George R.R. Martin" },
    { title: "Fire and Blood", autor: "George R.R. Martin" }
  ];

  getTheTitles(libros);
}

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
    const aux = [];
    nums.forEach(elemento => {
        if (elemento % 2 !== 0) {
            aux.push(elemento);
        }   
    });
    const container = document.getElementById('returnodds');
    aux.forEach(number => {
        const p = document.createElement('p');
        p.textContent = number;
        p.style.color = 'violet';
        p.style.fontSize = '16px';
        container.appendChild(p);
    });
}
function handleGetOdds() {
    const elementosInput = document.getElementById('inputOdds').value;
    const elementosArray = elementosInput.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    getOdds(elementosArray);
}


function duplicates(nums) {
    const countMap = {};
    nums.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';  // Limpiar el contenido previo

    let duplicados = 0;
    for (const num in countMap) {
        if (countMap[num] > 1) {
            duplicados++;
            resultadoDiv.innerHTML += `<h4>Valor duplicado: ${num}</h4>`;
            resultadoDiv.innerHTML += `<p>Se repite: ${countMap[num]} veces</p>`;
        }
    }

    // Si no se encontraron duplicados, mostrar un mensaje
    if (duplicados === 0) {
        resultadoDiv.innerHTML = `<h4>No hay elementos duplicados</h4>`;
    }
}

function procesarDuplicados() {
    const input = document.getElementById('inputNumeros').value;
    
    // Convertir la cadena de texto en un array de números, eliminando espacios adicionales
    const nums = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    duplicates(nums);
}



//Operaciones Matemáticas y Funciones de Conversión

//Suma de Rango:
// Función para calcular la suma de todos los números en un rango dado
function sumAll(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    const container = document.getElementById('resultsum');
   
    container.innerHTML = `La suma de todos los números entre ${a} y ${b} es: ${sum}`;
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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const people = [
    { name: "John Doe", age: 25 },
    { name: "Jane Smith", age: 30 },
    { name: "Bob Johnson", age: 40 }
];
function findTheOldest(people) {
    let oldestPerson = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > oldestPerson.age) {
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
}
const handleFindTheOldest = () => {
    const oldestPerson = findTheOldest(people);
    const resultContainer = document.getElementById('oldest');
    resultContainer.textContent = `La persona más vieja es: ${oldestPerson.name}`;
}
