import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ResLogin } from '../models/login.model';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  resLogin: ResLogin = { exito: false, mensaje: '' };

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly spinnerService: NgxSpinnerService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * Validación de los datos de acceso ingresados
   */
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.resLogin = {
        exito: false,
        mensaje: 'Por favor ingresa tus datos de acceso',
      };
      return;
    }

    this.resLogin = {
      exito: false,
      mensaje: '',
    };

    this.spinnerService.show();

    this.loginService.login(this.loginForm.value).subscribe({
      next: () => {
        this.spinnerService.hide();

        localStorage.setItem('logged', 'true');

        this.router.navigate(['pages']);
      },
      error: (err) => {
        this.spinnerService.hide();

        // Auth Mock
        if (
          this.username?.value === 'admin' &&
          this.password?.value === 'test'
        ) {
          localStorage.setItem('logged', 'true');

          this.router.navigate(['pages']);
          return;
        }

        this.resLogin = err.error;

        localStorage.setItem('logged', 'false');
      },
    });
  }

  get username(): AbstractControl | null {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }
}
