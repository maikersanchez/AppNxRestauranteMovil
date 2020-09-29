import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReporteCamareroModel } from '../model/ReporteCamarero';
import { CamareroWsService } from '../service/camarero-ws.service';

@Component({
  selector: 'app-reporte-camarero',
  templateUrl: './reporte-camarero.page.html',
  styleUrls: ['./reporte-camarero.page.scss'],
})
export class ReporteCamareroPage implements OnInit {

  valuePicker;
  listReporte:ReporteCamareroModel[];
  constructor(private camareroWs: CamareroWsService) { }

  ngOnInit() {
    this.valuePicker = new Date().toDateString();
    this.getReport();
  }

  changePrint(){
    console.log(this.valuePicker);
  }

  getReport() {
    console.log(this.valuePicker);
    let valorEnviar = new Date(this.valuePicker);
    this.camareroWs.obtenerReporteVentas(valorEnviar.getMonth()+1).subscribe(res => {
      this.listReporte = [...res.objeto as ReporteCamareroModel[]];
    },
      error => {
        //toast recibe el mensaje de error
      }
    );
  }
}
