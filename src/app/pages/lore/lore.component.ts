import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './lore.component.html',
  styleUrl: './lore.component.scss'
})
export class LoreComponent {
  title = 'Galaventure';

  imageJ1 : string = 'https://picsum.photos/200/300';
  imageJ2 : string = 'https://picsum.photos/200/300';

  imageMJ1 : string = 'https://picsum.photos/200/300';
  imageMJ2 : string = 'https://picsum.photos/200/300';
}
