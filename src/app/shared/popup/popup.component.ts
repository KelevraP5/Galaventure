import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @ViewChild('popupDialog', { static: false }) dialog!: ElementRef<HTMLDialogElement>;

  openDialog() {
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dialog && this.dialog.nativeElement.open) {
      const dialogRect = this.dialog.nativeElement.getBoundingClientRect();
      if (
        event.clientX < dialogRect.left ||
        event.clientX > dialogRect.right ||
        event.clientY < dialogRect.top ||
        event.clientY > dialogRect.bottom
      ) {
        this.closeDialog();
      }
    }
  }
}
