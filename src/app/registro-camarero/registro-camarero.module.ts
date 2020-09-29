import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCamareroPageRoutingModule } from './registro-camarero-routing.module';

import { RegistroCamareroPage } from './registro-camarero.page';
import { CamareroWsService } from '../service/camarero-ws.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCamareroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroCamareroPage],
  providers: [CamareroWsService]
})
export class RegistroCamareroPageModule {}
