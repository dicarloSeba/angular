import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient)
  {
    console.log('Servicio listo.');
  }

  getQuery(query: string){
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQCwK2dC4ym88ArBRxcGT4ypRHEYhwr-iHNB_BnQdkcxWuiecHAMBCknWKkhEBkMiuFcjZg2iNMS2XWS87ED4r35Qo2EP8gD--uzBlNlMKDhy9r4rxXJ_bCnarH0ohjdsW6bjMWnnQ'
    });
    const url = `https://api.spotify.com/v1/${ query }`;

    return this.http.get(url, {headers});
  }
   getNewReleases(){
     return this.getQuery('browse/new-releases?limit=20')
     .pipe(map(data => data['albums'].items));
   }

   getArtists(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data => data['artists'].items));
  }
}


