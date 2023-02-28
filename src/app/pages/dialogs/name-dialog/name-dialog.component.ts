import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.sass'],
})
export class NameDialogComponent implements OnInit {
  nameForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<NameDialogComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.nameForm.invalid) {
      return;
    }
    this.dialogRef.close(this.name?.value);
  }

  get name(): AbstractControl | null {
    return this.nameForm.get('name');
  }
}
