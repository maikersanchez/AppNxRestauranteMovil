import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaModel } from '../model/Respuesta';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteWsService {
  urlCliente = "api/Clientes";
  constructor(public ws:WebApiService) { }

  reporteCliente(valor):Observable<RespuestaModel> {
    let response = new RespuestaModel();
    let urlComplemento =  this.urlCliente +"/Reporte-Mes/"+valor;
    return new Observable<RespuestaModel>(observer => {
    let response = new RespuestaModel();
    this.ws.wsGet(urlComplemento).subscribe(res => {
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
