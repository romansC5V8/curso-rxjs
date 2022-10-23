import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('obs: ', error),
    complete: () => console.log('completado')
}

const intervalo$ = new Observable<number>(subscription => {
    const intervalId = setInterval(
        () => subscription.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalId);
        console.log('intervalo destruido');
    };
});

// -- Así las subscripciones reciben valores diferentes
// const sub1 = intervalo$.subscribe(rnd => console.log('subs1 ', rnd));
// const sub2 = intervalo$.subscribe(rnd => console.log('subs2 ', rnd));

/*
* SUBJECT: Es un observable especial con las siguientes propiedades:
* 1. Es Es "multicasting": Todos los subscriptores reciben los mismos datos emitidos.
* 2. También es un observer: O sea que se puede pasar como argumento a subscribe().
* 3. También maneja next(), error() y complete()
*/
const subject$ = new Subject<number>();
const intervalSubscription = intervalo$.subscribe(subject$);

// En lugar de subscribirme al observable, me subscribo al subject
const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {
    // Con esto se puede insertar información al flujo de datos del observable.
    // --> Cuando los datos son producidos por el mismo observable, se trata de un 
    // "cold observable". Si los datos se producen fuera del observable, entonces se llama 
    // "hot observable". Un subject puede transformar un cold observable en eun hot observable.
    subject$.next(10);
    subject$.complete();
    intervalSubscription.unsubscribe();
}, 3500);