import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {IMensagem} from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService extends IMensagem {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  info(mensagem: string): void {
    this.abrirSnack(mensagem,['info-snackbar']);
  }

  sucesso(mensagem: string): void {
    this.abrirSnack(mensagem, ['success-snackbar']);
  }

  erro(mensagem: string): void {
    this.abrirSnack(mensagem, ['error-snackbar']);
  }

  abrirSnack(mensagem: string, classesExtras: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = classesExtras;
    this.snackBar.open(mensagem, 'X', config);
  }


}
