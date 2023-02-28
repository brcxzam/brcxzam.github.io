import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dates-calculations',
  templateUrl: './dates-calculations.component.html',
  styleUrls: ['./dates-calculations.component.sass'],
})
export class DatesCalculationsComponent implements OnInit {
  options: Options[] = [
    { value: 'day', viewValue: 'Día' },
    { value: 'month', viewValue: 'Mes' },
    { value: 'year', viewValue: 'Año' },
  ];

  dateForm = this.formBuilder.group({
    initialDate: [null, Validators.required],
    typeOperation: [null, Validators.required],
    amount: [null, Validators.required],
  });

  finalDate: Date | undefined;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.dateForm.invalid) {
      return;
    }

    const DAYS = (this.initialDate?.value as Date).getDate();
    const MONTHS = (this.initialDate?.value as Date).getMonth();
    const YEARS = (this.initialDate?.value as Date).getFullYear();
    const AMOUNT = this.amount?.value;
    const TYPE_OPERATION = this.typeOperation?.value;

    switch (TYPE_OPERATION) {
      case 'day':
        this.finalDate = new Date(YEARS, MONTHS, DAYS + AMOUNT);
        break;
      case 'month':
        this.finalDate = new Date(YEARS, MONTHS + AMOUNT, DAYS);
        break;
      case 'year':
        this.finalDate = new Date(YEARS + AMOUNT, MONTHS, DAYS);
        break;

      default:
        this.finalDate = new Date();
        break;
    }
  }

  get initialDate(): AbstractControl | null {
    return this.dateForm.get('initialDate');
  }

  get typeOperation(): AbstractControl | null {
    return this.dateForm.get('typeOperation');
  }

  get amount(): AbstractControl | null {
    return this.dateForm.get('amount');
  }
}
