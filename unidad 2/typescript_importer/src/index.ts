import {Xmen} from './classes/xmen.class';

const wolwerine= new Xmen('Logan',40);
//wolwerine.imprimir();

const sumar= (a:number,b:number):number => a+b; 
const nombre= (nombre:string):string=> nombre.toUpperCase();

const promesa1= (nombre: string):Promise<string> =>{
    return new Promise ((resolve,reject)=>{
        resolve(nombre);
    });
}

promesa1('Seba').then(a => console.log(a.toUpperCase()));