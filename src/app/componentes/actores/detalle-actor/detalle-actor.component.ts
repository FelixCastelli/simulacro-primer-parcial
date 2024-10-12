import { Component, Input } from '@angular/core';
import { Actor } from '../../../modelos/actor.model';

@Component({
  selector: 'app-detalle-actor',
  standalone: true,
  imports: [],
  templateUrl: './detalle-actor.component.html',
  styleUrl: './detalle-actor.component.scss'
})
export class DetalleActorComponent {
  @Input() actor! : Actor;
}
