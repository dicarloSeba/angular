import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: Heroe;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
     // tslint:disable-next-line: no-string-literal
     this.activatedRoute.params.subscribe(params => { this.heroe = this.heroesService.getHeroe(params['id']); });
    }

}
