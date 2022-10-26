import { of } from 'rxjs';

/**
 * of() es una función con la que se crean observables mediante un listado de elementos.
 * La creación es de manera síncrona.
 * Cuando se emite el último valor del listado, el observable se completa.
 */

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 7, 8, 9);
const obs$ = of<any>([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

console.log('Inicio del Obs$');
obs$.subscribe({
    next: next => console.log('next', next),
    error: null,
    complete: () => console.log('Terminamos la secuencia!')
});
console.log('Fin del Obs$');