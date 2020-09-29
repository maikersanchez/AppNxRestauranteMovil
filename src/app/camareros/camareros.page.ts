import { Component, OnInit } from '@angular/core';
import { CamareroModel } from '../model/Camarero';
import { CamareroWsService } from '../service/camarero-ws.service';

@Component({
  selector: 'app-camareros',
  templateUrl: './camareros.page.html',
  styleUrls: ['./camareros.page.scss'],
})
export class CamarerosPage implements OnInit {

  listRehistros:CamareroModel[];

  constructor(private camareroWs: CamareroWsService) { }

  ngOnInit() {
    this.cargarCamareros();
  }

  cargarCamareros(){

    this.camareroWs.All().subscribe( res => {
      console.log(res);
      this.listRehistros = res as object as CamareroModel[]
      console.log(this.listRehistros);
    });
    console.log(this.listRehistros);
  }

  eliminarCamarero(valor){
    this.camareroWs.delete(valor);
    this.cargarCamareros();
  }

}
