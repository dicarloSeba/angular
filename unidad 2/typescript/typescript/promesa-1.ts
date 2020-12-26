(()=>{
    console.log(`Inicio`);
    const promesa= new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(`Pasó el tiempo.`);
            }, 1000);
        }
        );      
    
    promesa
        .then(mensaje=>console.log(mensaje))
        .catch(err=>console.warn(err));
    
    console.log(`Fin`);
    
                
    
})()