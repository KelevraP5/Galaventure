import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-classe4',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './classe4.component.html',
  styleUrl: '../allClasses.component.scss'
})
export class Classe4Component {
 title : string = 'Classe n°4';
}
