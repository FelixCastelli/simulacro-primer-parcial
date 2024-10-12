export class Actor {
    nombre : string;
    apellido : string;
    dni : number;
    edad : number;
    pais : string;

    constructor(nombre:string, apellido:string, dni:number, edad:number, pais:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        this.pais = pais;
    }
}