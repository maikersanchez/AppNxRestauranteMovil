import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteClientePageRoutingModule } from './reporte-cliente-routing.module';

import { ReporteClientePage } from './reporte-cliente.page';
import { ClienteWsService } from '../service/cliente-ws.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteClientePageRoutingModule
  ],
  providers:[ClienteWsService, CurrencyPipe],
  declarations: [ReporteClientePage]
})
export class ReporteClientePageModule {}
