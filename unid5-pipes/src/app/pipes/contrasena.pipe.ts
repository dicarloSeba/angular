import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(texto: string, active: boolean= true): string {
    return (active) ? '*'.repeat(texto.length) : texto;
  }

}
