//Схожесть функций и observables

//Observables, как и функции, выполняются лениво -
// то есть код внутри них будет проигнорирован до тех пор,
// пока кто-нибудь не вызовет функцию / не подпишется на observable.

import {Observable} from "rxjs";

const foo = () => {
    return 2
}

const observable = new Observable((subscriber) => {
    subscriber.next(2)
})

const fooResult = foo() ///вызов функции
console.log(fooResult)

observable.subscribe((result) => console.log(result)) /// подписка на observable

///В обоих случаях результат одинаков - в консоль выведется 2


// В чём разница между наблюдаемым объектом и функцией?
// Наблюдаемые объекты могут «возвращать» несколько значений с течением времени , чего не могут функции.
