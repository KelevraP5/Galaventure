import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-mj',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './mj.component.html',
  styleUrls: ['./mj.component.scss'] // Note the plural 'styleUrls'
})
export class MjComponent implements AfterViewInit {
  title: string = 'Maitre du Jeu'; // Use lowercase 'string'
  logoRecherche: string = "fa-solid fa-magnifying-glass"; // Use lowercase 'string'
  logoAdd: string = "fa-solid fa-plus"; // Use lowercase 'string'
  showPopup: boolean = false;

  openDialog() {
    const dialog = document.querySelector('#popupDialog') as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }

  closeDialog() {
    const dialog = document.querySelector('#popupDialog') as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  ngAfterViewInit() {
    const dialog = document.querySelector('#popupDialog') as HTMLDialogElement;

    console.log(dialog);

    // const rect = dialog.getBoundingClientRect();
    // const isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
    //   rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
    // if (!isInDialog) {
    //   this.closeDialog();
    // }
  }
}
