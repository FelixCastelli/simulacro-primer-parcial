import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FirebaseService } from '../../../servicios/firebase.service';
import { Actor } from '../../../modelos/actor.model';

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  imports: [],
  templateUrl: './listado-actores.component.html',
  styleUrl: './listado-actores.component.scss'
})
export class ListadoActoresComponent {
  @Input() actores:Actor[] = [];
  @Output() detallePelicula : EventEmitter<Actor> = new EventEmitter<Actor>;
  
  seleccionarActor(index : number){
    this.detallePelicula.emit(this.actores[index]);
  }
}
