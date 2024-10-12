import { Routes } from '@angular/router';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { ActoresComponent } from './componentes/actores/actores.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';

export const routes: Routes = [
    { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
    { path: 'peliculas', component: PeliculasComponent},
    { path: 'altaPelicula', component: AltaPeliculaComponent},
    { path: 'altaActores', component: AltaActorComponent},
    { path: 'actores', component: ActoresComponent},
    
];
