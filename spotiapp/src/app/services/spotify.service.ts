import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  public artistas:any[]=[];

  constructor(public http: HttpClient) {
      console.log("Servicio listo para usuar.")
   }
   getArtistas(artistas:string){
     let url=`https://api.spotify.com/v1/search?query=${artistas}&type=artist&limit=20`;

     let headers=new HttpHeaders({
       'authorization': 'Bearer BQC32q3ZVNUfytWDWzZwnBphTd4NGZnQxW-7_p_qBYpSpWKFbE-cnAQM4wy9lOFp3lNEKPcIo2LznuWpWHc'
      });

      return this.http.get(url,{ headers })
                .map((resp:any) =>{
                      this.artistas=resp.artists.items;
                      return this.artistas;
                });
    }
}
