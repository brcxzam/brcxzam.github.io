import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'exercise-ies-systems';
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  logout(): void {
    localStorage.setItem('logged', 'false');
    this.router.navigate(['login']);
  }

  get showMenu(): boolean {
    return this.authService.isAuthenticated();
  }
}
