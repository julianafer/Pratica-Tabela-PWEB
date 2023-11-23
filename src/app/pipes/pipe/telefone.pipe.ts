import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor: string): string {
    if(valor && valor.length == 8){
      return valor.substring(0,4) + '-' + valor.substring(4,8)
    }if(valor && valor.length == 11){
      return '('+ valor.substring(0,3) + ')'  + valor.substring(3,7) + '-' + valor.substring(7,11)
    }if(valor && valor.length == 10){
      return '('+ valor.substring(0,2) + ')'  + valor.substring(2,6) + '-' + valor.substring(6,10)
    }
    return valor
  }

}
