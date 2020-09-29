import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteCamareroPageRoutingModule } from './reporte-camarero-routing.module';

import { ReporteCamareroPage } from './reporte-camarero.page';
import { CamareroWsService } from '../service/camarero-ws.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteCamareroPageRoutingModule
  ],
  declarations: [ReporteCamareroPage],
  providers: [CamareroWsService]
})
export class ReporteCamareroPageModule {}
