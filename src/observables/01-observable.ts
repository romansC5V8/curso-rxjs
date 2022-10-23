import { Observable, Observer } from 'rxjs';

// Hay 3 maneras de pasar argumentos a "subscribe":
// 1. solamente una función que represente a "next()"
// 2. Tres callbacks representando "next()", "error()" y "complete()"
// 3. Un objeto "observer" que implemente los 3 métodos

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('completado [obs]')
}


// const obs$ = Observable.create() --> casi nunca se usa para crear observables
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Fernando';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

// obs$.subscribe(console.log);
// obs$.subscribe(resp => console.log(resp));

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );

obs$.subscribe(observer);