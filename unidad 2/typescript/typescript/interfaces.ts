(()=>{
    
    interface Xmen {
        nombre:string,
        edad: number,
        poder?:string
    }
    const enviarXmen= (xmen:Xmen) =>{
        console.log(`Enviando a ${xmen.nombre} a la mision.`)
    }

    const regresarXmen= (xmen:{nombre:string}) =>{
        console.log(`Regresando a ${xmen.nombre} al cuartel.`)
    }

    let wolwerine:Xmen =  {
        nombre:'Logan',
        edad:40
    }

    enviarXmen(wolwerine);
    regresarXmen(wolwerine);

})()