import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  logo: string = 'https://picsum.photos/200/300';
  header1: string = 'Le Lore';
  header2: string = 'Les Règles';
  header3: string = 'Partie maître du jeu';
  header4: string = 'Partie joueur';
  header5: string = 'Se connecter';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.header5 = isLoggedIn ? 'Se déconnecter' : 'Se connecter';
    });
  }

  onAuthAction(): void {
    if (this.isLoggedIn) {
      this.authService.logout();
      console.log(localStorage);
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
