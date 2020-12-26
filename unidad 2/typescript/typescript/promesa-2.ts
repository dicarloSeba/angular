(()=>{
    const retirarDinero= (montoDinero : number): Promise<number> => {
        let dineroActual : number = 1000;

        return new Promise((resolve,reject) => {
            if(montoDinero>dineroActual)
            {
                reject(`Fondos insuficientes.`);
            }
            else
            {                
                dineroActual-=montoDinero;
                resolve(dineroActual);
            }
        });
    };

    retirarDinero(500)
        .then(montoActual=>console.log(`${montoActual}`))
        .catch(console.warn);
    //.catch(err=>console.warn(err));
    
})()