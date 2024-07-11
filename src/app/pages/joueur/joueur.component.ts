import {Component, Renderer2, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {PopupComponent} from "../../shared/popup/popup.component";

@Component({
  selector: 'app-joueur',
  standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, PopupComponent],
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.scss'
})
export class JoueurComponent {
  @ViewChild(PopupComponent) popup!: PopupComponent;

  title : string = 'Joueur';
  logoRecherche : string = "fa-solid fa-magnifying-glass";
  logoAdd : string = "fa-solid fa-plus";
  nbPoints : string = '20';

  constructor(private renderer: Renderer2) {}

  openDialog() {
    this.popup.openDialog();
  }
}
