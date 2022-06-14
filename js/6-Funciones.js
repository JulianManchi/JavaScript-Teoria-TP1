// Funciones sin parametros
function saludar(){
    // todo el codigo que quiero en esta funcion
    document.write('Hola Mundo');
};

// invocar o llamar a una funcion
saludar();

// Funcion que retorna valor
function convertirDolarAPesos(dolares){
    let pesosFinales = dolares * 210;
    return pesosFinales;
    // return se usa para poner una variable que se va a extraer
};

// funcion con parametros
function saludarPersona(nombrerecibido, apellidorecibido){
    document.write(`<br> Binevenido ${nombrerecibido} ${apellidorecibido}`);

};

let nombre = prompt('Ingrese un nombre');
let apellido = prompt('Ingrese un apellido');

saludarPersona(nombre, apellido);

let pesosSinImpuestos = convertirDolarAPesos(60);

document.write(` <br> Juego en pesos $ ${pesosSinImpuestos}`);