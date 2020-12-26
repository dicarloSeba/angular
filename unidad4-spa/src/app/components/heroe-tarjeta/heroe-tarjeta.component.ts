import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
    if (this.heroe.idx)
    {
      this.heroeSeleccionado.emit(this.heroe.idx);
    }
    else
    {
      this.heroeSeleccionado.emit(this.index);
    }
  }

}
