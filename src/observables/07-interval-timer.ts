import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000); // normalmente interval() comienza en 0.

// const timer$ = timer(2000); // normalmente timer() comienza en 0.
// const timer$ = timer(2000, 1000); // --> aquí el timer es infinito. No hay complete()
const timer$ = timer(hoyEn5); // --> aquí el timer está programado.

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');