import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * map() sirve para:
 * - extraer información
 * - transformar información
 * - cambiar completamente la información
 */

// map necesita SIEMPRE un "return"
range(1, 5).pipe(
    map<number, string>(val => (val * 10).toString())
).subscribe(console.log);

// -------------------

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
);

keyupCode$.subscribe(code => console.log('map', code));