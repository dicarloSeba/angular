import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  public artistas:any[]=[];
  urlSpotify:string='https://api.spotify.com/v1/';
  tokenSpotify:string='BQASvibE0lOmv-B5GC-Ko0yRaCIE1ZxE9L6Pi238V1OolzbVFSFj_choycYBvY36-9XeArjRq24nABQKQWg';

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
                .map((resp) =>{
                      this.artistas=resp['artists'].items;
                      return this.artistas;
                });
    }

    getNewReleases(){
      let url=`${this.urlSpotify}browse/new-releases?limit=20`
      let headers=this.getHeaders();
      return this.http.get(url,{ headers })
              .map(data=>{
                  return data['albums'].items;
                });
    }
}
