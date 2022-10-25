import { asyncScheduler } from 'rxjs';

// ** ASYNCSCHEDULER NO ES UN OBSERVABLE, ES UNA SUBSCRIPTION

// setTimeout(() => {}, 3000);  \__ Estas 2 functiones se pueden hacer con asyncScheduler
// setInterval(() => {}, 3000); /

// ***** asyncScheduler como setTimeout() *****
// Aquí el scheduler programa la función saludar para ejecutarse con un retraso de 2 segundos
const saludar = () => console.log('Hola mundo');
// asyncScheduler.schedule(saludar, 2000);

// Aquí la función que se pasa recibe un (solo) parámetro
const saludar2 = nombre => console.log(`Hola ${nombre}`);
// asyncScheduler.schedule(saludar2, 2000, 'Fernando');


// ***** asyncScheduler como setInterval() *****
// Aquí la función que se pasa NO puede ser una función lambda (por la recursión)
const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    // Esto convierterte la función de setTimeout a setInterval
    this.schedule(state + 1, 1000);
}, 3000, 0);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);