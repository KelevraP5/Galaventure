import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-popup',
  standalone: true,
  template: `
    <h2 mat-dialog-title>{{data.titre}}</h2>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">OK</button>
    </div>
  `
})
export class SuccessPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titre: string, message: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
