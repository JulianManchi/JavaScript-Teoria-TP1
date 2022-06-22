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
}

// Como crear un objeto o instancia
let userValentina = new Usuario('ValeOrmaechea', 'Valentina', 'Ormaechea', 'ValeOrmaechea@gmail.com', '12345678Q@', '-');
let userJuan = new Usuario('JuanMeni', 'Juan Pablo', 'Menichetti', 'JuanMenichetti02@gmail.com', 'Juan1223344@', '--');

console.log(userValentina);

userValentina.mostrarDatos();
userJuan.mostrarDatos();
  