import {Component} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import {Router, RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  // loginForm: FormGroup;
  // registerForm: FormGroup;
  // submitted = false;
  // error = '';
  //
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private authService: AuthService,
  //   private router: Router
  // ) {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  //
  //   this.registerForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(8)]],
  //     confirmPassword: ['', Validators.required]
  //   });
  // }
  //
  // ngOnInit() {}
  //
  // // getters for easy access to form fields
  // get f() { return this.loginForm.controls; }
  // get fRegister() { return this.registerForm.controls; }
  //
  // onSubmit() {
  //   this.submitted = true;
  //
  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //
  //   this.authService.login(this.f['username'].value, this.f['password'].value)
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['/']);
  //       },
  //       error => {
  //         this.error = error;
  //       }
  //     );
  // }
  //
  // onSubmitRegister() {
  //   this.submitted = true;
  //
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  //
  //   this.authService.register(this.fRegister['username'].value, this.fRegister['email'].value, this.fRegister['password'].value)
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['/login']);
  //       },
  //       error => {
  //         this.error = error;
  //       }
  //     );
  // }
}
