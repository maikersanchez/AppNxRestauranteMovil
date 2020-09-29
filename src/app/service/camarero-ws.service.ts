import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingService } from '../components/shared/loading/service/loading.service';
import { CamareroModel } from '../model/Camarero';
import { RespuestaModel } from '../model/Respuesta';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class CamareroWsService {

  urlCamarero = "api/Camareros";

  constructor(private ws: WebApiService, private loadingServ: LoadingService) { }

  All() {
    this.loadingServ.presentLoading(undefined, 'Procesando solicitud...', 1500);
    return this.ws.wsGet(this.urlCamarero);
  }

  delete(valor){
    this.loadingServ.presentLoading(undefined, 'Procesando solicitud...', 1500);
    return this.ws.wsDelete(this.urlCamarero+ "/" + valor);
  }

  autocompleteCamarero(input) {
    return this.ws.wsGet(this.urlCamarero + "/Autocomplete/" + input).pipe(map(res => res as unknown as CamareroModel[]));
  }


  obtenerReporteVentas(mes): Observable<RespuestaModel> {
    let complementoUrl = this.urlCamarero + "/Reporte-Mes/" + mes;
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


  registrarCamarero(camarero: CamareroModel): Observable<RespuestaModel> {
    let url = this.urlCamarero;
    let response = new RespuestaModel();

    this.loadingServ.presentLoading(undefined, 'Procesando solicitud...', 1000)
    return new Observable<RespuestaModel>(observer => {
      this.ws.wsPost(url, camarero).subscribe(res => {
        console.log(res);
        if (res["idCamarero"]) {
          response.respuesta = "Se creo el usuario exitosamente";
          response.error = false;
          observer.next(response);
        }

      }, err => {
        response.respuesta = "Upps, no fue posible procesar el registro.";
        response.error = true;
        observer.error(response);
      });
    });
  }

}
