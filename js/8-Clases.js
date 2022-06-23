// Crear una clase Ejemplo:

/*class Usuario{
    // primero creamos un metodo constructor
    constructor(nombreUsuarioParam, nombreParam, apellidoParam, correoParam, passwordParam, direccionParam){
        this.nombreUsuario = nombreUsuarioParam;
        this.password = passwordParam;
        this.apellido = apellidoParam;
        this.nombre = nombreParam;
        this.correo = correoParam;
        this.direccion = direccionParam;
    }
}*/

class Usuario{
    // primero creamos un metodo constructor
    constructor(nombreUsuarioParam, nombreParam, apellidoParam, correoParam, passwordParam, direccionParam){
        this.nombreUsuario = nombreUsuarioParam;
        this.password = passwordParam;
        this.apellido = apellidoParam;
        this.nombre = nombreParam;
        this.correo = correoParam;
        this.direccion = direccionParam;
    }
    // definir los metodos
    cambiarPassword(){
        document.write('<br>Cambiando el password...');
    }

    mostrarDatos(){
        document.write(`<br>
        <ul>
        <li> Nombre: ${this.nombre} </li>
        <li> Apellido: ${this.apellido} </li>
        <li> Correo: ${this.correo} </li>
        <li> Direccion: ${this.direccion} </li>
        <li> Nombre Usuario: ${this.nombreUsuario} </li>
        </ul>`);
    }

    // Propiedades conmutadas get y set
    // get
    get mostrarNombreUsuario(){
        return this.nombreUsuario
    }
    get mostrarDireccion(){
        return this.direccion
    }

    // setter: Se usa para modificar una propiedad
    set modificarDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion
    }
}

// clase alumno que hereda de usuario
class Alunmo extends Usuario {
    // Primer metodo
    // Propiedades elegidas: comision, notas, legajo, estado, asistencia
    constructor(comisionParam, legajoParam, estadoParam, nombreParam2, apellidoParam2, nombreUsuarioParam2, passwordParam2, CorreoParam2, direccionParam2 = 'sin direccion'){
        // invocar al constructor de la clase Usuario
        super(nombreUsuarioParam2, nombreParam2, apellidoParam2, CorreoParam2, passwordParam2, direccionParam2);

        this.comision = comisionParam;
        this.legajo = legajoParam;
        this.estado = estadoParam; // true: Activo - false: Suspendido
        this.asistencia = 0; // propiedad por defecto
        this.notas = [];
    }

    mostrarDatosAlumno(){
        document.write
        (`<ul>
        <li>Comision: ${this.comision} </li>
        <li>Legajo: ${this.legajo} </li>
        <li>Estado: ${this.estado} </li>
        <li>Asistencia: ${this.asistencia} </li>
        </ul>`);
    }

    mostrarDatos(){
        document.write(`<br>
        <ul>
        <li> Nombre: ${this.nombre} </li>
        <li> Apellido: ${this.apellido} </li>
        <li> Correo: ${this.correo} </li>
        <li> Direccion: ${this.direccion} </li>
        <li> Nombre Usuario: ${this.nombreUsuario} </li>
        <li>Comision: ${this.comision} </li>
        <li>Legajo: ${this.legajo} </li>
        <li>Estado: ${this.estado} </li>
        <li>Asistencia: ${this.asistencia} </li>
        </ul>`);
    }

    deshabilitar(){
        this.estado = false;
    }
    
    habilitar(){
        this.estado = true
    }

    // get set

    set modificarEstado(nuevoEstado){
        this.estado = nuevoEstado;
    }

    get mostrarEstado(){
        return this.estado;
    }
}

// Como crear un objeto o instancia
let userValentina = new Usuario('ValeOrmaechea', 'Valentina', 'Ormaechea', 'ValeOrmaechea@gmail.com', '12345678Q@', 'Av. Republica del libano 1863');

let userJuan = new Usuario('JuanMeni', 'Juan Pablo', 'Menichetti', 'JuanMenichetti02@gmail.com', 'Juan1223344@', '--');

console.log(userValentina);

userValentina.mostrarDatos();
userJuan.mostrarDatos();

document.write(`El nombre del usuario es: ${userValentina.mostrarNombreUsuario}`);
document.write(`<br>La direccion del usuario ${userValentina.mostrarNombreUsuario} es: ${userValentina.mostrarDireccion}`);

userValentina.modificarDireccion = 'Tucuman';

document.write(`<br>La direccion del usuario ${userValentina.mostrarNombreUsuario} es: ${userValentina.mostrarDireccion}`);

let alumnoMauro = new Alunmo('2i', 1233, true, 'Mauro', 'Garcia', 'Mau21', 'sjs8w8ej293', 'Mauro@gmail.com', 'Roca 453');

let alumnaDaniela = new Alunmo('2i', 1233, true, 'Mauro', 'Garcia', 'Mau21', 'sjs8w8ej293', 'Mauro@gmail.com', 'Roca 432');

let alumnoHector = new Alunmo('2i', 1233, true, 'Mauro', 'Garcia', 'Mau21', 'sjs8w8ej293', 'Mauro@gmail.com', 'Roca 432');

alumnoMauro.mostrarDatos();
alumnoMauro.mostrarDatosAlumno();

console.log(alumnoMauro);

console.log(alumnoMauro.mostrarDireccion);

alumnoMauro.deshabilitar();

console.log(alumnoMauro.mostrarEstado);