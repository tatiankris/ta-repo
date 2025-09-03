                                                  //of()
import {of} from "rxjs";
//of()
//Создает Observable, который будет последовательно испускать поток значений, переданных в of() через запятую.
//const source = of(1, 2, 3, 4, 5);
const source = of(1, 2, 3, 4, 5);
source.subscribe(val => console.log(val));
//output: 1,2,3,4,5

                                                  //from()
import {from} from "rxjs";
//from()
//Создает Observable из Array, Promise, Iterable

// Array to Observable --- Все значения Array будут потоком данных [1, 2, 3] -> 1, 2, 3
const arraySource = from([1, 2, 3, 4, 5]);
arraySource.subscribe(val => console.log(val));
//output: 1,2,3,4,5

// String to Observable ---- Символы строки будет потоком данных "abc" -> "a", "b", "c"
const stringSource = from('Hello World');
source.subscribe(val => console.log(val));
//output: 'H','e','l','l','o',' ','W','o','r','l','d'

// Promise to Observable ---
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
promiseSource.subscribe(val => console.log(val));
//output: 'Hello World'

// Map to Observable
//works on js collections
const map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');
//
const mapSource = from(map);
mapSource.subscribe(val => console.log(val));
//output: [1, 'Hi'], [2, 'Bye']


                                                  //ajax()
import { ajax } from 'rxjs/ajax';
//
//Созает Observable, испускающий значения асинхронно
const githubUsers = `https://api.github.com/users?per_page=2`;
//
//Observable, который испускает ОБЪЕКТ ОТВЕТА на запрос. (с заголовками, статусами ответа и всей инфой)
const users = ajax(githubUsers);
//
const subscribe = users.subscribe(
    res => console.log(res), ///res - это будет результат ответа на запрос
    err => console.error(err)
);
//
//Observable, который испускает только JSON-ключ ОБЪЕКТА ОТВЕТА на запрос. (без инфы о запросе, только то, что в .response)
const users2 = ajax.getJSON(githubUsers);



                                                  //interval()
import { interval } from 'rxjs';
//Observable каждую секунду выдает значения от 0 до бесконечности
const intervalSource = interval(1000);
intervalSource.subscribe(val => console.log(val));
//output: 0,1,2,3,4,5....

                                                  //timer ()
import { timer  } from 'rxjs';
//
//выдаст значение 0 через 1 сек и завершится, т.к. передан только один аргумент
const timerSource = timer(1000);
timerSource.subscribe(val => console.log(val));
//output: 0
//
//передано 2 аргумента,
// 1-й = 1 сек - через столько выдаст 0(первое значение),
// 2-й = 2 сек - через столько будут выдаваться остальные числа, как у interval
const timer2Source = timer(1000, 2000);
//output: 0,1,2,3,4,5......

                                                  //range
import { range } from 'rxjs';
//выдает значения от 1-го аргумента в количестве, указанном во 2-м аргументе
const rangeSource = range(1, 10);
rangeSource.subscribe(val => console.log(val));



                                                  //empty()
import { empty } from 'rxjs';
//Создает пустой Observable, который сразу завершается(сomplete)
const emptySubscribe = empty().subscribe({
    next: () => console.log('Next'),         // - пропустит
    complete: () => console.log('Complete!') // - сразу сюда
});
//output: 'Complete!'


                                                  //defer()
import { defer } from 'rxjs';
///
const s1 = of(new Date()); //Запечатлет текущую дату
const s2 = defer(() => of(new Date())); //Захватит время даты в момент подписки


                                                  //Observable()
import { Observable } from 'rxjs';
//Observable.create() === new Observable()
// Позмоляет самому написать функцию observer
const evenNumbers = Observable.create(function(observer) {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0) {
            observer.next(value);
        }
        value++;
    }, 1000);

    return () => clearInterval(interval);
});



