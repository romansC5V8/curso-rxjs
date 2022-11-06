import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // entra: KeyboardEvent --> sale: string
    filter(key => key === 'Enter') // entra: string --> sale: string
);

keyUp$.subscribe(console.log);