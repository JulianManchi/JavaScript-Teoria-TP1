// 

// let memoria = '16RAM';
// let pantalla = 7;
// let almacenamiento = '128GB';
// let camara = true;
// let SO = 'Android';

// Notacion literal para crear un objeto
let usuarioFrancisco = {
    // propiedad: valor,
    nombreUsuario: 'Fran',
    password: 'A$1432',
    nombre: 'Francisco',
    apellido: 'Andrade',
    correo: 'Frank@gmail.com',
    estado: true,
    // metodos o funciones
    cambiarPassword: () =>{
        document.write('Nuevo Password');
    }
}

// mostrar un objeto
document.write(usuarioFrancisco);
console.log(usuarioFrancisco);

// mostrar propiedades de 1 objeto (forma 1)

document.write(`<br>Nombre de usuario: ${usuarioFrancisco.nombreUsuario}`);

// mostrar propiedades de 1 objeto (forma 2)

document.write(`<br>Email: ${usuarioFrancisco['correo']}`);

// modificar un valor del objeto 

usuarioFrancisco.estado = false
document.write(`<br>Estado: ${usuarioFrancisco.estado}`);

// Agregar una propiedad nueva al objeto

usuarioFrancisco.direccion = 'Tucuman';
document.write(`<br>Direccion: ${usuarioFrancisco.direccion}`);