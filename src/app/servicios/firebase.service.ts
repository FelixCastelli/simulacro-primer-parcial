import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../modelos/pelicula.model';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Actor } from '../modelos/actor.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore = inject(Firestore);

  constructor() {}

  async agregarPelicula(pelicula : Pelicula) {
    const colPeliculas = collection(this.firestore, "peliculas");
    await addDoc(colPeliculas, {...pelicula});
  }

  traerPeliculas(): Observable<Pelicula[]> {
    const colPeliculas = collection(this.firestore, "peliculas");
    return collectionData(colPeliculas) as Observable<Pelicula[]>;
  }

  async agregarActor(actor : Actor) {
    const colActores = collection(this.firestore, "actores");
    await addDoc(colActores, {...actor});
  }

  traerActores(): Observable<Actor[]> {
    const colActores = collection(this.firestore, "actores");
    return collectionData(colActores) as Observable<Actor[]>;
  }

}
