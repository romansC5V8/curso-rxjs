import { asyncScheduler, observeOn, range } from 'rxjs';

/**
 * range() crea un observable que emite una sequencia de números en base a un rango.
 * Normalmente es síncrono pero con asyncSchedule puede ser asíncrono.
 */

// El "asyncScheduler" crea una subscription

// const src$ = range(1, 5, asyncScheduler); --> código antiguo
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('inicio');

src$.subscribe(console.log);

console.log('fin');