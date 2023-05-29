import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CifradoPage } from './cifrado.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    component: CifradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    IonicModule,],
  exports: [RouterModule],
})
export class CifradoPageRoutingModule {}
