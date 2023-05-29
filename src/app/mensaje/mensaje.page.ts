import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.page.html',
  styleUrls: ['./mensaje.page.scss'],
})
export class MensajePage implements OnInit {

  enctexto: string;
  destexto: string;
  encPass: string;
  desPass: string;
  textoEncriptado: string;
  textoDesencriptado: string;
  constructor(public authService: AuthenticationService) { }
  convertirTexto(conversion: string) {
    if (conversion === 'encriptar') {
      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
    } else {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CryptoJS.enc.Utf8);
    }
}

  ngOnInit() {
  }

}
