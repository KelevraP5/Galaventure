import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-reglesMJ',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './reglesMJ.component.html',
  styleUrl: '../allRegles.component.scss'
})
export class ReglesMJComponent {
 title : string = 'Règles pour le mj';
}
