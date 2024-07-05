import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-reglesJoueurs',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './reglesJoueurs.component.html',
  styleUrl: '../allRegles.component.scss'
})
export class ReglesJoueursComponent {
 title : string = 'Règles pour les joueurs';
}
