import { Component, inject } from '@angular/core';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { PeliculasActorComponent } from './peliculas-actor/peliculas-actor.component';
import { FirebaseService } from '../../servicios/firebase.service';
import { Actor } from '../../modelos/actor.model';

@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [ListadoActoresComponent, DetalleActorComponent, DetallePaisComponent, PeliculasActorComponent],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.scss'
})
export class ActoresComponent {
  firebaseService = inject(FirebaseService);
  actores : Actor[] = [];
  detalleActor! : Actor;

  constructor(){
    this.firebaseService.traerActores().subscribe((actor:any)=>{
      this.actores = actor;
    })
  }
  
  recibirDetalleActor(actor : Actor){
    this.detalleActor = actor;
  }

}
