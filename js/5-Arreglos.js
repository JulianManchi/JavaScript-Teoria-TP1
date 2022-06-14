// Ejemplo: Crear una variable y poder modificarla

// Declarar o crear un arreglo
let usuarios = [];

let series = ['Naruto', 2, 'Game of Trons', 8, 'Rick and Morty', 4];

document.write(series)

// Acceder a un elemento del arreglo
document.write('<br>' + series[0]);
document.write('<br>' + series[4]);
console.log(series.length);

// Bucle para mostrar todos los elementos del arreglo
for(let posicion = 0; posicion < series.length; posicion = posicion + 1){
    document.write('<br>Elemento: ' + series[posicion]);
};

// Cuando accedemos a elementos que no existen en el arreglo
document.write('<br>' + series[10]);

// Agregar un elemento al final del arreglo
series.push('Ozark');

// Bucle para mostrar todos los elementos del arreglo
for(let posicion = 0; posicion < series.length; posicion = posicion + 1){
    document.write('<br>Elemento: ' + series[posicion]);
};

// Agregar un elemento en una posicion particular del arreglo ya creado
series.splice(3, 0, 'Breaking Bad');

document.write('<hr>');

for(let posicion = 0; posicion < series.length; posicion = posicion + 1){
    document.write('<br>Elemento: ' + series[posicion]);
};

// Eliminar elementos desde una posicion particular
// series.splice(5, 2); //Ej: (posicion del elemento, catidad de elementos a eliminar);
series.splice(7); // Elimina los elementos de la derecha desde la posicion 5
document.write('<hr>');

for(let posicion = 0; posicion < series.length; posicion = posicion + 1){
    document.write('<br>Elemento: ' + series[posicion]);
};

// Modificar un elemento del arreglo
series[6] = true;

document.write('<hr>');

for(let posicion = 0; posicion < series.length; posicion = posicion + 1){
    document.write('<br>Elemento: ' + series[posicion]);
};