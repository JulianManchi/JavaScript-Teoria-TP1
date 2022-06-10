// Ejemplo: Crear una variable y poder modificarla

// declarar o crear un arreglo
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
}