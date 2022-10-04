import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from './../shared/shared.module';
import { GenerateObjectComponent } from './generate-object/generate-object.component';
import { LettersRoutingModule } from './letters-routing.module';
import { LettersComponent } from './letters/letters.component';

@NgModule({
  declarations: [
    LettersComponent,
    GenerateObjectComponent
  ],
  imports: [
    CommonModule,
    LettersRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    ClipboardModule,
    MatTooltipModule
  ]
})
export class LettersModule { }
