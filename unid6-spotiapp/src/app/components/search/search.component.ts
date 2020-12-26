import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {
  artists: any[] = [];
  constructor(private spotifyService: SpotifyService) { }

  getArtist(termino: string){
    this.spotifyService.getArtists(termino).subscribe(data => this.artists = data);
  }

}
