import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../dialogs/alert-dialog/alert-dialog.component';

interface Options {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  dataForm = this.formBuilder.group({
    nombres: ['', [Validators.required, this.withespaceValidator]],
    apellidos: ['', [Validators.required, this.withespaceValidator]],
    fumas: [false, Validators.required],
    actualmentePracticasLectura: [false, Validators.required],
    librosLeidosUltimoTresMeses: this.formBuilder.array([]),
    estadoCivil: [''],
  });

  options: Options[] = [
    { value: 1, viewValue: 'Soltero' },
    { value: 2, viewValue: 'Casado' },
    { value: 4, viewValue: 'Separado' },
    { value: 5, viewValue: 'Divorsiado' },
    { value: 6, viewValue: 'Viudo' },
  ];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.dialog.open(AlertDialogComponent, {
      data: this.dataForm.valid,
    });
  }

  onChange(): void {
    if (!this.actualmentePracticasLectura?.value) {
      this.librosLeidosUltimoTresMeses.clear();
    }
  }

  addLibro(): void {
    this.librosLeidosUltimoTresMeses?.push(
      this.formBuilder.control('', [Validators.required])
    );
  }

  removeLibro(index: number): void {
    this.librosLeidosUltimoTresMeses.removeAt(index);
  }

  /**
   * Custom Validator para la validación de espacios en blanco
   */
  withespaceValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const removeWhitespace = control.value.trim();
    const isValid = removeWhitespace.length === control.value.length;
    return isValid ? null : { whitespace: true };
  }

  get nombres(): AbstractControl | null {
    return this.dataForm.get('nombres');
  }

  get apellidos(): AbstractControl | null {
    return this.dataForm.get('apellidos');
  }

  get actualmentePracticasLectura(): AbstractControl | null {
    return this.dataForm.get('actualmentePracticasLectura');
  }

  get librosLeidosUltimoTresMeses(): FormArray {
    return this.dataForm.get('librosLeidosUltimoTresMeses') as FormArray;
  }
}
