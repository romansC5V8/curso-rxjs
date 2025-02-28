import { fromEvent } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

/**
 * mapTo() perimte transformar cualquier entrada en una salida específica
 * 
 * MAPTO ES @deprecated. DESDE RXJS v8 YA NO HAY "mapTo()"
 */
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
    // es lo mismo que 
    // map(x => 'tecla presionada')
);

keyupCode$.subscribe(code => console.log('map', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));