import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  authForm: FormGroup;
  loginForm: FormGroup;
  data: any;
  errorMessage: string = '';
  showSuccessPopupRegister: boolean = false;
  showSuccessPopupLogin: boolean = false;
  submitted: boolean = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pseudo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordStrengthValidator]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

    this.loginForm = this.fb.group({
      emailOrPseudo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]+/.test(value);
    const isValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial;

    return !isValid ? { 'passwordStrength': true } : null;
  }

  onRegisterSubmit(): void {
    this.submitted = true;
    if (this.authForm.valid) {
      const userData = {
        email: this.authForm.get('email')?.value,
        pseudo: this.authForm.get('pseudo')?.value,
        password: this.authForm.get('password')?.value
      };

      this.authService.register(userData).subscribe(
        response => {
          this.data = response;
          this.openSuccessRegister();
          this.authForm.reset();
          this.submitted = false;
        },
        error => {
          console.error('Erreur lors de la requête HTTP :', error);
        }
      );
    } else {
      this.authForm.markAllAsTouched();
    }
  }

  onLoginSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      this.authService.login(formData).subscribe(
        (response) => {
          localStorage.setItem('token', response.message.token);
          console.log(localStorage);
          this.router.navigate([''], { queryParams: { success: true } });
          this.openSuccessLogin();
          this.submitted = false;
        },
        (error) => {
          if (error.status === 401) {
            this.errorMessage = 'Email/pseudo ou mot de passe incorrect.';
          } else {
            this.errorMessage = 'Une erreur est survenue lors de la connexion.';
          }
          console.error('Erreur de connexion :', error);
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  openSuccessRegister(): void {
    this.showSuccessPopupRegister = true;
    setTimeout(() => {
      this.showSuccessPopupRegister = false;
    }, 5000);
  }

  openSuccessLogin(): void {
    this.showSuccessPopupLogin = true;
    setTimeout(() => {
      this.showSuccessPopupLogin = false;
    }, 5000);
  }
}
