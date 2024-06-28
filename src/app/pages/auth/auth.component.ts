import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";

  // constructor(private authService: AuthService, private router: Router) { }
  //
  // login() {
  //   this.authService.login(this.username, this.password)
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['/home']);
  //       },
  //       error => {
  //         this.errorMessage = 'Identifiants incorrects';
  //       }
  //     );
  // }
}
