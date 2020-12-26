"use strict";
(() => {
    class Avenger {
        //nombre:string;
        //equipo:string;      
        //nombreReal?:string;
        //puedeVolar:boolean=true;
        //peleasGanadas:number=0;
        //constructor(nombre:string, equipo:string){
        //    this.nombre=nombre;
        //    this.equipo= equipo;
        //}
        constructor(nombre, equipo, nombreReal, puedeVolar = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedeVolar = puedeVolar;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
