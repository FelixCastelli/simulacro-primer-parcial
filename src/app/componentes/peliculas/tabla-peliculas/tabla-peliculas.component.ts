import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../../modelos/pelicula.model';

@Component({
  selector: 'app-tabla-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './tabla-peliculas.component.html',
  styleUrl: './tabla-peliculas.component.scss'
})
export class TablaPeliculasComponent {
  @Input() peliculas:Pelicula[] = [];
  @Output() detallePelicula : EventEmitter<Pelicula> = new EventEmitter<Pelicula>;

  seleccionarPelicula(indice : number){
    this.detallePelicula.emit(this.peliculas[indice]);
  }
}
