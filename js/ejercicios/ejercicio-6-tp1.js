let numero1 = parseInt(prompt('Ingrese el primer numero'));
let numero2 = parseInt(prompt('Ingrese el segundo numero'));

if(numero1 > numero2){
    document.write('El primer numero es el mayor: ' + numero1);
}
else if(numero1 === numero2){
    document.write('Los numeros ingresados son iguales');
}
else{
    document.write('El segundo numero es el mayor: ' + numero2);
}