(()=>{
    
  class Avenger{
      //nombre:string;
      //equipo:string;      
      //nombreReal?:string;
      //puedeVolar:boolean=true;
      //peleasGanadas:number=0;

      //constructor(nombre:string, equipo:string){
      //    this.nombre=nombre;
      //    this.equipo= equipo;
      //}

      constructor(public nombre:string,
                  public equipo:string,
                  public nombreReal?:string,
                  public puedeVolar:boolean = true,
                  public peleasGanadas:number = 0                                  
                  ){}
    
  }

  const antman= new Avenger('Antman','Capi');

  console.log(antman);

})()