import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  public artistas:any[]=[];
  urlSpotify:string='https://api.spotify.com/v1/';
  tokenSpotify:string='BQCasbRf6km8Sjg2X9REzgjM1UC1p0ux8b-eYQvT77UkpO4dzC9uyJPxDlxVOF-HlE3NND9hODycrRJGZf0';

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers= new HttpHeaders({
          'authorization': 'Bearer '+this.tokenSpotify
         });
    return this.http.get(url, { headers });
  }

  constructor(public http: HttpClient) {
      console.log("Servicio listo para usuar.")
   }

   getArtista(id:string){
      return this.getQuery(`artists/${id}`);
    }

   getArtistas(artistas:string){
      return this.getQuery(`search?query=${artistas}&type=artist&limit=20`)
                .map((resp) =>{
                      this.artistas=resp['artists'].items;
                      return this.artistas;
                });
    }

    getNewReleases(){
      return this.getQuery('browse/new-releases?limit=20')
              .map(data=>{
                  return data['albums'].items;
                });
    }
}
