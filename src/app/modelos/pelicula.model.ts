export class Pelicula {
    id: number;
    nombre: string;
    tipo: string;
    fechaEstreno: string;
    cantidadPublico: number;
    foto: string;
    protagonista: string

    constructor(id:number, nombre: string, tipo: string, fechaEstreno: string, cantidadPublico: number, foto: string, protagonista: string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.foto = foto;
        this.protagonista = protagonista;
    }
}