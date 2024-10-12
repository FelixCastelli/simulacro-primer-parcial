import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '../../servicios/firebase.service';
import { Actor } from '../../modelos/actor.model';
import { TablaPaisesComponent } from '../../tabla-paises/tabla-paises.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  imports: [ReactiveFormsModule, TablaPaisesComponent, CommonModule],
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent {
  firebaseService = inject(FirebaseService);
  formBuilder = inject(FormBuilder);
  formGroup: FormGroup;
  invalido: boolean = false;

  constructor() {
    this.formGroup = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      apellido: ["", [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      dni: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern('[0-9]*')]],
      edad: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('[0-9]*')]],
      pais: ["", [Validators.required]]
    });
  }

  obtenerPais(pais: string) {
    if (pais !== "" && pais !== "0") {
      this.formGroup.controls['pais'].setValue(pais);
    }
  }

  altaActor() {
    if (this.formGroup.invalid) {
      this.invalido = true; // Set the error flag to true to display error messages in the template
      return;
    }
    
    const actor = new Actor(
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['apellido'].value,
      this.formGroup.controls['dni'].value,
      this.formGroup.controls['edad'].value,
      this.formGroup.controls['pais'].value
    );

    this.firebaseService.agregarActor(actor);
    this.formGroup.reset(); // Resets the form group and keeps the validation state
    this.invalido = false; // Reset the error flag after submission
  }
}
