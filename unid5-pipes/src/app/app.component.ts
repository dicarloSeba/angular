import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  heroe: string = 'Capitan America';
  nombre: string = 'Sebastian';
  nombre2: string = 'seBastIaN DI cARlO';
  salario: number = 1234.5;
  salario2: number = 34.125;
  pi: number = 3.1464;
  porcentaje: number = 0.48578;
  fecha: Date = new Date();
  idioma: string= 'es';
  urlSeguro: string='https://www.youtube.com/embed/2mR9GTf_VU0';
  activar: boolean= false;
  persona: any = {
    nombre: 'Sebastian',
    apellido: 'Di Carlo',
    edad: 34,
    domicilio: {
      calle: 'Montecaseros',
      numero: 3371,
      localidad: 'Coquimbito'
    }
  };
  valorPromesa = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('llego la data');
      }, 3500);
    });

}
