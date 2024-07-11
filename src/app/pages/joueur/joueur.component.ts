import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { PopupComponent } from "../../shared/popup/popup.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-joueur',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PopupComponent, FormsModule, NgForOf],
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.scss'
})
export class JoueurComponent {
  @ViewChild(PopupComponent) popup!: PopupComponent;

  title: string = 'Joueur';
  logoRecherche: string = "fa-solid fa-magnifying-glass";
  logoAdd: string = "fa-solid fa-plus";
  nbPoints: number = 20;
  initialStats: { [key: string]: number } = {
    stat_1: 10,
    stat_2: 10,
    stat_3: 10,
    stat_4: 10,
  };
  inventaire: string = '';
  inventaireList: string[] = [];

  openDialog() {
    this.popup.openDialog();
  }

  updatePoints(event: Event) {
    const input = event.target as HTMLInputElement;
    const statName = input.id;
    const newValue = parseInt(input.value, 10);
    const oldValue = this.initialStats[statName];

    if (newValue >= 10 && newValue <= 95) {
      if (newValue > oldValue) {
        if (this.nbPoints > 0) {
          this.nbPoints -= 1;
          this.initialStats[statName] = newValue;
        } else {
          input.value = oldValue.toString();
        }
      } else if (newValue < oldValue) {
        this.nbPoints += 1;
        this.initialStats[statName] = newValue;
      }
    } else {
      input.value = oldValue.toString();
    }
  }

  addToInventaire() {
    if (this.inventaire.trim()) {
      this.inventaireList.push(this.inventaire);
      this.inventaire = '';
    }
  }
}
