import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.services';


@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html'
})
export class HeroesBusquedaComponent implements OnInit {
  heroesEncontrados: Heroe[] = [];
  textoBusqueda: string;
  constructor(private heroesService: HeroesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.heroesEncontrados = [];
    this.activateRoute.params.subscribe(params =>
      {
        this.textoBusqueda = params['termino'];
        this.heroesEncontrados = this.heroesService.buscarHeroes(params['termino']);
        console.log(this.heroesEncontrados);
      });
  }
   verHeroe(i: number){
    this.router.navigate(['/heroe', i]);
  }
}
