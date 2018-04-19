import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  artistas:any[]=[];

  constructor(public http: HttpClient) {
      console.log("Servicio listo para usuar.")
   }
   getArtistas(){
     let url='https://api.spotify.com/v1/search?query=Metallica&type=artist&limit=20';

     let headers=new HttpHeaders({
       'authorization': 'Bearer BQDlqGqzaObNY_LxSQtGWYa1_lKM7N-q6BZ1a8kwA900kpptw_Dewn1bA308jQHhPwR0pcL2_DQAzwl2q78'
      });

      return this.http.get(url,{ headers })
                .map((resp:any) =>{
                      this.artistas=resp.artists.items;
                      return this.artistas;
                });
    }
}
