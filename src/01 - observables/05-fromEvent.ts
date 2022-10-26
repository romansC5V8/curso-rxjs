import { fromEvent } from 'rxjs';

/**
 * fromEvent() permite crear observables en base a un evento que proviene de un target, 
 * p. ej.  "scroll" (event) en el document (target). 
 */

// Eventos del DOM
const scr1$ = fromEvent<MouseEvent>(document, 'click');
const scr2$ = fromEvent<KeyboardEvent>(document, 'keyup');

scr1$.subscribe(({ x, y }) => {
    console.log(x, y);
});

scr2$.subscribe(event => {
    console.log(event.key);
});