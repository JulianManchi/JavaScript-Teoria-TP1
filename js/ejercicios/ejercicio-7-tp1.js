let numero1 = parseInt(prompt('Ingrese el primer numero'));
let numero2 = parseInt(prompt('Ingrese el segundo numero'));
let numero3 = parseInt(prompt('Ingrese el tercer numero'));

if(numero1 > numero2 && numero1 > numero3){
    document.write('El primer numero es el mayor: ' + numero1);
}
else if(numero1 < numero2 && numero3 < numero2){
    document.write('El segundo numero es el mayor: ' + numero2);
}
else if(numero1 === numero2 & numero1 === numero3){
    document.write('Los numeros ingresados son iguales');
}
else{
    document.write('El tercer numero es el mayor: ' + numero3);
} 