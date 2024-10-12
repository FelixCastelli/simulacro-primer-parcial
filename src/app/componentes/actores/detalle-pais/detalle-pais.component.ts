import { Component, inject, Input } from '@angular/core';
import { Actor } from '../../../modelos/actor.model';
import { ApiRequestService } from '../../../servicios/api-request.service';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.scss'
})
export class DetallePaisComponent {
  api = inject(ApiRequestService);
  pais : any;

  @Input() set obtenerActor(actor : Actor){
    if (actor) {
      this.infoPais(actor.pais);
    }
  }

  infoPais(pais : string){
    this.api.obtenerDetallePais(pais).subscribe((info:any)=>{
      this.pais = (info[0]);
    })
  }
  
}
