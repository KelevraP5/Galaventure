import {Component, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { NgClass } from "@angular/common";
import {PopupComponent} from "../../shared/popup/popup.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-mj',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass, PopupComponent, FormsModule],
  templateUrl: './mj.component.html',
  styleUrl: './mj.component.scss'
})
export class MjComponent{
  @ViewChild(PopupComponent) popup!: PopupComponent;
  @ViewChild('playersContainer', { static: false }) playersContainer!: ElementRef;
  @ViewChild('datePartie', { static: false }) datePartie!: ElementRef;

  constructor(private renderer: Renderer2) {}

  title: string = 'Maitre du Jeu';
  logoRecherche: string = "fa-solid fa-magnifying-glass";
  logoAdd: string = "fa-solid fa-plus";
  logoMore : string = 'fa-solid fa-plus';
  logoRemove : string = 'fa-solid fa-minus';
  today : string = '';

  openDialog() {
    this.popup.openDialog();
  }

  addInput() {
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'player-container');

    const newPlayer = this.renderer.createElement('input');
    this.renderer.setAttribute(newPlayer, 'type', 'text');
    this.renderer.setAttribute(newPlayer, 'placeholder', 'Ajouter un joueur');
    this.renderer.addClass(newPlayer, 'player-input');

    const removeBtn = this.renderer.createElement('div');
    this.renderer.addClass(removeBtn, 'remove-player');

    const icon = this.renderer.createElement('i');
    this.logoRemove.split(' ').forEach(cls => this.renderer.addClass(icon, cls));

    this.renderer.appendChild(removeBtn, icon);

    this.renderer.listen(removeBtn, 'click', () => {
      this.renderer.removeChild(this.playersContainer.nativeElement, container);
    });

    this.renderer.appendChild(container, newPlayer);
    this.renderer.appendChild(container, removeBtn);

    if (this.playersContainer) {
      this.renderer.appendChild(this.playersContainer.nativeElement, container);
    }
  }
}
