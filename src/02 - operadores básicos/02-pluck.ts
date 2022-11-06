import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

/**
 * pluck() se usa para extraer el valor de una propiedad específica de un objeto y
 * ese valor es emitida por el observable
 * 
 * PLUCK ES @deprecated. DESDE RXJS v8 YA NO HAY "pluck()"
 */
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    // pluck('key')
    // es lo mismo que map(val => val?.key)

    pluck('target', 'baseURI')
    // es lo mismo que  map(val => val?.target?.baseURI)
);

keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));