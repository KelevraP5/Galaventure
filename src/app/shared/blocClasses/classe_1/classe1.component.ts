import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-classe1',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './classe1.component.html',
  styleUrl: '../allClasses.component.scss'
})
export class Classe1Component {
 title : string = 'Classe n°1';
}
