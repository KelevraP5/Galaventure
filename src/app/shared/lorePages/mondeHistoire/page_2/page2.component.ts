import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
 title : string = 'Page 2';
}
