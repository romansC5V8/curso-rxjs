import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => {
        console.log('antes', x);
        return 100; // --> Todo lo que tap() regresa es ignorado
    }),
    map(val => val * 10),
    tap({
        next: valor => console.log('después', valor),
        complete: () => console.log('se terminó todo')
    })
).subscribe(val => console.log('subs', val));