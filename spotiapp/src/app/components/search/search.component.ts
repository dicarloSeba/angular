import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  termino:string='';
  loading:boolean;
  constructor(public _spotify: SpotifyService) {
   }

   buscarArtistas(){
     if(this.termino.length==0)
      return '';
      this.loading=true;
      console.log(this.termino);
       this._spotify.getArtistas(this.termino).subscribe(
         artistas=>{
           console.log('Informacion lista');
           console.log(artistas);
           this.loading=false;
         });
   }

}
