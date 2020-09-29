import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteCamareroPage } from './reporte-camarero.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteCamareroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteCamareroPageRoutingModule {}
