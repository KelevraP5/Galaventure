import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-classe3',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './classe3.component.html',
  styleUrl: '../allClasses.component.scss'
})
export class Classe3Component {
 title : string = 'Classe n°3';
}
