import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { TablaPeliculasComponent } from './tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculasComponent } from './detalle-peliculas/detalle-peliculas.component';
import { FirebaseService } from '../../servicios/firebase.service';
import { Pelicula } from '../../modelos/pelicula.model';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaPeliculasComponent, DetallePeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {
  firebaseService = inject(FirebaseService)
  pelicula: Pelicula[] =[];
  detallePelicula! : Pelicula;

  constructor() {
    this.firebaseService.traerPeliculas().subscribe((pelicula: any) => {
      this.pelicula = pelicula;
    })
  }

  obtenerDetallePelicula(pelicula: Pelicula) {
    this.detallePelicula = pelicula;
  }

}
