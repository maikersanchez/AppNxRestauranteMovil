import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReporteClienteModel } from '../model/ReporteCliente';
import { ClienteWsService } from '../service/cliente-ws.service';

@Component({
  selector: 'app-reporte-cliente',
  templateUrl: './reporte-cliente.page.html',
  styleUrls: ['./reporte-cliente.page.scss'],
})
export class ReporteClientePage implements OnInit {

  valaroSend;
  listReporte: ReporteClienteModel[];

  constructor(private clienteWs: ClienteWsService, private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.valaroSend = 10000;
    this.getReport();
  }

  getReport() {
    this.clienteWs.reporteCliente(this.valaroSend).subscribe(res => {
      this.listReporte = [...res.objeto as ReporteClienteModel[]];
    },
      error => {
        //toast recibe el mensaje de error
      }
    );
  }
  
  formatMoney(value: any) {
    const temp = `${value}`.replace(/\,/g, "");
    return this.currencyPipe.transform(temp).replace("$", "");
  }

  transformTotal() {
    const value = this.valaroSend;
    
    this.valaroSend = this.formatMoney(value),
      { emitEvent: false }
  }

  soloNumerosInput(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }



}
