import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-classe2',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './classe2.component.html',
  styleUrl: '../allClasses.component.scss'
})
export class Classe2Component {
 title : string = 'Classe n°2';
}
