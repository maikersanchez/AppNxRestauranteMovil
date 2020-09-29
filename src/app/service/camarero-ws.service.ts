import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaModel } from '../model/Respuesta';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class CamareroWsService {

  urlCamarero = "api/Camareros";

  constructor(private ws:WebApiService) { }

  obtenerReporteVentas(mes):Observable<RespuestaModel> {
    let complementoUrl = this.urlCamarero + "/Reporte-Mes/"+mes;
    let response = new RespuestaModel();
    return new Observable<RespuestaModel>(observer => {
    let response = new RespuestaModel();
    this.ws.wsGet(complementoUrl).subscribe(res => {
      console.log(res);
      response.respuesta = "ok";
        response.error = false;
        response.objeto = res;
        observer.next(response);
    }, err => {
      response.respuesta = "Upps, no fue posible procesar la solicitud.";
      response.error = true;
      observer.error(response);
    });
  })
  }
  
}
