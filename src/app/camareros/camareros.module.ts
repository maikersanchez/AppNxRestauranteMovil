import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarerosPageRoutingModule } from './camareros-routing.module';

import { CamarerosPage } from './camareros.page';
import { CamareroWsService } from '../service/camarero-ws.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarerosPageRoutingModule
  ],
  declarations: [CamarerosPage],
  providers: []
})
export class CamarerosPageModule {}
