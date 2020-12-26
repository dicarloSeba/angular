
function imprimirConstructor(constructorClase: Function){
    console.log(constructorClase);
}
@imprimirConstructor
export class Xmen {
    constructor(
        public nombre:string ,
        public edad:number 
    ){}

    imprimir(){
        console.log(`${this.nombre} - ${this.edad}`);
    }

}