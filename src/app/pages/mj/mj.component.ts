import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-mj',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './mj.component.html',
  styleUrl: './mj.component.scss'
})
export class MjComponent {
  title : String = 'Maitre du Jeu';

  logoRecherche : String = "fa-solid fa-magnifying-glass";
  logoAdd : String = "fa-solid fa-plus";
}
