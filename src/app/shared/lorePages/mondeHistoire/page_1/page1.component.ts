import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
 title : string = 'Page 1';
}
