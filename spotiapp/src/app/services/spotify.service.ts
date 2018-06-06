import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  public artistas:any[]=[];
  urlSpotify:string='https://api.spotify.com/v1/';
  tokenSpotify:string='BQA8w-I8WsuM803xcM_E82YhAIjLPyvsQg_RWkyVqoz0vpBoU6YElllwvp12dzxdYiVyNSjnZ3sHWJv4CSQ';

  getHeaders():HttpHeaders{
    let headers= new HttpHeaders({
          'authorization': 'Bearer '+this.tokenSpotify
         });
         return headers;
  }

  constructor(public http: HttpClient) {
      console.log("Servicio listo para usuar.")
   }

   getArtista(id:string){
     let url=`${this.urlSpotify}artists/${id}`;

     let headers=this.getHeaders();
      return this.http.get(url,{ headers });
    }

   getArtistas(artistas:string){
     let url=`${this.urlSpotify}search?query=${artistas}&type=artist&limit=20`;

     let headers=this.getHeaders();
      return this.http.get(url,{ headers })
                .map((resp:any) =>{
                      this.artistas=resp.artists.items;
                      return this.artistas;
                });
    }

    getNewReleases(){
      let url=`${this.urlSpotify}browse/new-releases?limit=20`
      let headers=this.getHeaders();
      return this.http.get(url,{ headers });
    }
}
