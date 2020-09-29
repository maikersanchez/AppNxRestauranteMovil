import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCamareroPage } from './registro-camarero.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCamareroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCamareroPageRoutingModule {}
