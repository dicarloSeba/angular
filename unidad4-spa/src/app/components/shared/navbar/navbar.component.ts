import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe } from '../../../services/heroes.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  heroesArr: Heroe[];
  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  verHeroes(texto: string){
    if (texto){
       this.router.navigate(['/busqueda', texto]);
    }

  }

}
