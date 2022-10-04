import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';



@NgModule({
  declarations: [
    ErroDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ErroDialogComponent]
})
export class SharedModule { }
