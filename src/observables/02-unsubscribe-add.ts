import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('obs: ', error),
    complete: () => console.log('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // Cuando se llama a "unsubscribe" se ejecuta esta función
    return () => {
        clearInterval(interval);
        console.log('Interval destruido');
    }
});

// CADA SUBSCRIPTION CREA UNA NUEVE INSTANCIA DEL OBSERVABLE
const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// Concatenar subscripciones
subscription1.add(subscription2);
subscription2.add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    // Si las subscripciones están concatenadas, basta llamar a la primera
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completado timeout');
}, 3000);
