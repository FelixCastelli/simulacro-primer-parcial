import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ApiRequestService } from '../servicios/api-request.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.scss'
})
export class TablaPaisesComponent {
  api = inject(ApiRequestService);
  tabla : string = "";
  @Output() pais : EventEmitter<string> = new EventEmitter<string>;

  constructor(){
    this.obtenerPaises();
  }

  obtenerPaises(){
    this.api.obtenerPaises().subscribe((paises:any)=>{
      paises.forEach((pais:any) => {
        this.tabla += '<option value="'+pais.name.common+'">'+pais.name.common+'</option>';
      });
      (<HTMLSelectElement>document.getElementById("paises")).innerHTML += this.tabla;
    });
  }

  recibirPais(event : Event){
    const selectElement = event.target as HTMLSelectElement;
    this.pais.emit(selectElement.value);
  }
}
