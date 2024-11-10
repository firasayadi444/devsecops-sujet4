import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  termsAccepted: boolean = false;
  loginError: string | null = null; // Add this property for error message

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.jwt);
        this.authService.loadUserFromLocalStorage();
        this.router.navigate(['/profil']);
        this.loginError = null; // Clear any previous error
      },
      error => {
        console.error('Login failed', error);
        this.loginError = 'Email or password is incorrect. Please try again.'; // Set error message
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
