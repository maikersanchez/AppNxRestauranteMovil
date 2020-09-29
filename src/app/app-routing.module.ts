import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal/principal',
    pathMatch: 'full'
  },
  {
    path: 'reporte-cliente',
    loadChildren: () => import('./reporte-cliente/reporte-cliente.module').then( m => m.ReporteClientePageModule)
  },
  {
    path: 'reporte-camarero',
    loadChildren: () => import('./reporte-camarero/reporte-camarero.module').then( m => m.ReporteCamareroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'registro-camarero',
    loadChildren: () => import('./registro-camarero/registro-camarero.module').then( m => m.RegistroCamareroPageModule)
  },
  {
    path: 'camareros',
    loadChildren: () => import('./camareros/camareros.module').then( m => m.CamarerosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
