import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteClientePage } from './reporte-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteClientePageRoutingModule {}
