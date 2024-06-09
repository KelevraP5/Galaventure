import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo : string = 'https://picsum.photos/200/300';
  header1 : string = 'Le Lore';
  header2 : string = 'Les Règles';
  header3 : string = 'Partie maître du jeu';
  header4 : string = 'Partie joueur';
  header5 : string = 'Se connecter';
}
