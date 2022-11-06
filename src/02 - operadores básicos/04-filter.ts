import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Con filter() se filtran las emisiones de los valores del observable
 */

// ----- Opción más básica -----
// range(1, 10).pipe(
//     filter(val => val % 2 === 1)
// ).subscribe(console.log);

// ----- Opción con "index" -----
// range(20, 30).pipe(
//     filter((val, i) => {
//         console.log('index', i);
//         return val % 2 === 1;
//     })
// ).subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes).pipe(
    filter(p => p.tipo !== 'heroe')
).subscribe(console.log);