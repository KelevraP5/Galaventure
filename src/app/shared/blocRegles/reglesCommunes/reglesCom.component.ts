import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-reglesCom',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './reglesCom.component.html',
  styleUrl: '../allRegles.component.scss'
})
export class ReglesComComponent {
 title : string = 'Règles Communes';
}
