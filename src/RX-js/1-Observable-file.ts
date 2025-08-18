import {Observable} from "rxjs";

//   Observable - наблюдаемый объект
//Observable — это источник множества значений, «передающий» их наблюдателям (потребителям).

const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
});

//   Метод - subscribe - у Observable
//   observable.subscribe( Subscriber / только функция Subscriber.next )

//Cоздадим subscriber - объект подписчика

//Содержит методы: next, complete, error

const subscriber = {
    next(x) {
        console.log('got value ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    },
}

/// Сделаем подписку на Observable
observable.subscribe(subscriber)

//Можно передавать сразу только один метод next
observable.subscribe((x) => console.log('got value ' + x))

///Можно отписаться от Observable
const subscription = observable.subscribe((x) => console.log(x));
subscription.unsubscribe();

// Observable - синхронны
// Если subscriber.next(3); сразу внутри Observable - то он выполнится синхронно
// Если subscriber.next(3); внутри Observable и при этом еще внутри какой-то асинхронной штуки - то он выполнится асинхронно


//!! Observables могут выдавать значения как синхронно, так и асинхронно.


//Все манипуляции над потоком данных прописываются в pipe(труба) перед вызовом subscribe
