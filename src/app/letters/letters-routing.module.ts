import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateObjectComponent } from './generate-object/generate-object.component';
import { LettersComponent } from './letters/letters.component';

const routes: Routes = [
  { path: '', component: LettersComponent},
  { path: 'object', component: GenerateObjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LettersRoutingModule { }
