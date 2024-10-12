import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { Pelicula } from '../../modelos/pelicula.model';
import { TablaActoresComponent } from '../../tabla-actores/tabla-actores.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule, TablaActoresComponent, CommonModule],
  templateUrl: './alta-pelicula.component.html',
  styleUrl: './alta-pelicula.component.scss'
})
export class AltaPeliculaComponent {
  firebaseService = inject(FirebaseService);
  formBuilder = inject(FormBuilder);
  formGroup: FormGroup;
  invalido: boolean = false;
  tipo : string = "";
  peliculas : string[] = [];
  pelicula! : Pelicula;

  constructor(){
    this.formGroup = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      tipo : ["",[Validators.required]],
      fechaEstreno : ["",[Validators.required]],
      cantidadPublico : ["",[Validators.required, Validators.minLength(1), Validators.pattern('[0-9]*')]],
      foto : ["",[Validators.required, Validators.pattern('https?://.+')]],
      protagonista : ["",[Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  obtenerActor(actor:string){
    if (actor !="" ) {
      if (actor != "0")
        this.formGroup.controls['protagonista'].setValue(actor);
    }
  }
  
  altaPelicula(){
    if (this.formGroup.invalid) {
      this.invalido = true;
      return;
    }
    this.firebaseService.traerPeliculas().subscribe((peli:any)=>{
      this.peliculas = peli;
      this.pelicula = new Pelicula(
        this.peliculas.length+1,
        this.formGroup.controls['nombre'].value, 
        this.formGroup.controls['tipo'].value, 
        this.formGroup.controls['fechaEstreno'].value, 
        this.formGroup.controls['cantidadPublico'].value, 
        this.formGroup.controls['foto'].value, 
        this.formGroup.controls['protagonista'].value
      );
      this.invalido = false;
    })
    setTimeout(() => {
      this.firebaseService.agregarPelicula(this.pelicula);      
      this.formGroup.reset();
    }, 500);

  }

  recibirTipo(event : Event){
    const selectElement = event.target as HTMLSelectElement;
    this.tipo = selectElement.value;
  }

}
