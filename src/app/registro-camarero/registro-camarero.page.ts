import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../components/shared/toast/toast.service';
import { CamareroModel } from '../model/Camarero';
import { CamareroWsService } from '../service/camarero-ws.service';

@Component({
  selector: 'app-registro-camarero',
  templateUrl: './registro-camarero.page.html',
  styleUrls: ['./registro-camarero.page.scss'],
})
export class RegistroCamareroPage implements OnInit {
  formCamarero: FormGroup;
  submitted = false;
  mensajeSuccess;
  mensajeStantard;
  mensajeDanger;

  constructor(private fb: FormBuilder, private camareroWs: CamareroWsService, private toastServ:ToastService) { }

  ngOnInit() {
    this.formCamarero = this.fb.group({
      IdCamarero: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      VNombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      VApellido1: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      VApellido2: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    });
  }

  sendRegistro() {
    this.submitted = true;

    if (this.formCamarero.invalid) {
      return;
    }

    let camarero = this.formCamarero.value as CamareroModel;
    this.camareroWs.registrarCamarero(camarero).subscribe(res => {
       
      this.formCamarero.reset();
      this.toastServ.presentToast(res.respuesta, 1500);
    }, error => {
      this.toastServ.presentToast(error['respuesta'], 1500);
    });
  }


}
