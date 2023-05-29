import { Component, OnInit } from '@angular/core';

import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.page.html',
  styleUrls: ['./cifrado.page.scss'],
})
export class CifradoPage implements OnInit {
  tamanio: number;
  permutacion: string;
  sustitucion: string;
  modulo: number;
  cifrado: string;
  plaintext: string;
  ciphertext: string;
  key: string;
  
  constructor() { }
  cifrar() {
    // Convertir la clave a bytes
    const claveBytes = CryptoJS.enc.Utf8.parse(this.permutacion);

    // Generar el texto para cifrar
    const textoCifrar = CryptoJS.lib.WordArray.random(this.tamanio).toString();

    // Cifrado Feistel con clave AES
    let bloqueIzquierdo = CryptoJS.enc.Hex.parse(textoCifrar.substr(0, 16));
    let bloqueDerecho = CryptoJS.enc.Hex.parse(textoCifrar.substr(16, 16));

    for (let i = 0; i < this.modulo; i++) {
      const bloqueAnterior = bloqueIzquierdo;

      bloqueIzquierdo = bloqueDerecho;
      bloqueDerecho = bloqueAnterior.concat(this.generarFuncion(bloqueDerecho, claveBytes));
    }

    const resultado = bloqueDerecho.toString() + bloqueIzquierdo.toString();
    this.cifrado = resultado;
    console.log("Cifrado: ",this.cifrado);
  }

  generarFuncion(bloque: any, clave: any) {
    const cifrado = CryptoJS.AES.encrypt(bloque, clave, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    return cifrado.ciphertext;
  }


  ngOnInit() {
  }

}
