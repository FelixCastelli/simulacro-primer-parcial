import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [],
  templateUrl: './tabla-actores.component.html',
  styleUrl: './tabla-actores.component.scss'
})
export class TablaActoresComponent {
  firebaseService = inject(FirebaseService);
  tabla : string = "";
  @Output() actor : EventEmitter<string> = new EventEmitter<string>;

  constructor(){
    this.obtenerActores();
  }

  obtenerActores(){
    this.firebaseService.traerActores().subscribe((actores:any)=>{
      actores.forEach((actor:any) => {
        this.tabla += '<option value="'+actor.nombre+" "+actor.apellido+'">'+actor.nombre+" "+actor.apellido+'</option>';
      });
      (<HTMLSelectElement>document.getElementById("actores")).innerHTML += this.tabla;
    });
  }
  
  recibirActor(event : Event){
    const selectElement = event.target as HTMLSelectElement;
    this.actor.emit(selectElement.value);
  }
}
