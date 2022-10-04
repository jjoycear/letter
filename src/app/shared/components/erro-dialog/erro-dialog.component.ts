import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-erro-dialog',
  templateUrl: './erro-dialog.component.html',
  styleUrls: ['./erro-dialog.component.scss']
})
export class ErroDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
