import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-regles',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './regles.component.html',
  styleUrl: './regles.component.scss'
})
export class ReglesComponent {
  title : String = 'Regles';
}
