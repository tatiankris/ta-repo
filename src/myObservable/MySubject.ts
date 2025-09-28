import {AsyncSubject, BehaviorSubject, from, ReplaySubject, Subject} from "rxjs";
import { multicast, refCount } from "rxjs/operators";

const init = () => {}

import {MyObservable} from "./ObservableImplement.ts";

// class MySubject<T> extends MyObservable<T> {
//
//     constructor() {
//         super(subscriber =>  q);
//     }
// }

const subject = new Subject<number>();
// const subject = new BehaviorSubject<number>(0);
// const subject = new ReplaySubject<number>(4);
// const subject = new AsyncSubject<number>();


//
subject.next(222)
subject.next(69)
subject.next(111) ///Записывается в Behavior Subject, перетрет initial valur перед подпиской

subject.subscribe((value) => console.log("Subject:", value))

subject.next(333)
subject.next(444)
subject.next(555)

subject.complete() ////Завершает любой Subject, запускает AsyncSubject

subject.next(666)
subject.next(777)


/////////////Multicasted Observable
// const subj = new Subject<number>();
const subj = new BehaviorSubject<number>(44);
// const subj = new ReplaySubject<number>(3);
const observable = from([1, 2, 3]);

///subj теперь ловит значения от observable и может отдавать этот один поток многим подписчикам
subj.getValue() ///для BehaviorSubject

subj.subscribe({
    next: (v) => console.log("Observer A:", v)
})

setTimeout(() => {
    subj.subscribe({
        next: (v) => console.log("Observer B:", v)
    })
}, 1000)

observable.subscribe(subj)


/////Multicast
const multicastedObservable = from(["a", "b", "v", "c"])
    .pipe(multicast(() => new ReplaySubject(1)), refCount())

multicastedObservable.subscribe((v) => console.log("Observer C:", v))
multicastedObservable.subscribe((v) => console.log("Observer J:", v))

setTimeout(() => {
    multicastedObservable.subscribe((v) => console.log("Observer D:", v))
}, 1000)

// multicastedObservable.connect();

export {init}
