import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent implements OnInit {
  paises: any[] = [];
  constructor(private httpClient: HttpClient) {
    console.log('lista paises');
    this.httpClient.get('https://restcountries.eu/rest/v2/lang/es')
                    .subscribe((p: any) => {
                      this.paises = p;
                      console.log(this.paises); });
   }

  ngOnInit(): void {
  }

}
