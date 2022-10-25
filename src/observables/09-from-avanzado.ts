import { from, of } from 'rxjs';

/**
 * of(): Crea un observable que emite una secuencia basado en argumentos.
 * from(): Crea un observable en base a un array, promise, iterable, observable, etc.
 */

const obs = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

const src1$ = from([1, 2, 3, 4, 5]); // --> se emite cada miembro del array por separado
const src2$ = of([1, 2, 3, 4, 5]); // --> se emite un solo objeto. Con "...[]" son iguales

const src3$ = from('Fernando'); // --> se emite cada letra como un objeto.
const src4$ = from(fetch('https://api.github.com/users/klerith'));

// src1$.subscribe(obs);
// src2$.subscribe(obs);
// src3$.subscribe(obs);
// src4$.subscribe(async (resp) => { // async: para poder usar await después
//     console.log(resp.body);
//     const dataResp = await resp.json(); // await para esperar a que retorne la promesa
//     console.log(dataResp);
// });

// -------------

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// Forma clásica de iterar por un iterable
// for (let id of miIterable) {
//     console.log(id);
// }

// Forma de iterar con from()
from(miIterable).subscribe(obs);