(()=>{
    const avengers = {
        nombre: 'Steave',
        heroe: 'Capitan America',
        poder: 'droga'
    };

    const extraer = ({heroe,poder}:any ) =>{ 
        //console.log(nombre);
        console.log(heroe);
        console.log(poder);
    }

    extraer(avengers);

    const arrAvenger: string[] = ['thor','ironman','spiderman'];

    const extraeArr= ([luki,,arana]:string[]) => {
    console.log(luki);
    //console.log(hombre);
    console.log(arana);
    };

    extraeArr(arrAvenger);
})();