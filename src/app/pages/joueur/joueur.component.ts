import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-joueur',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.scss'
})
export class JoueurComponent {
  title : String = 'Joueur';

  logoRecherche : String = "fa-solid fa-magnifying-glass";
  logoAdd : String = "fa-solid fa-plus";
}
