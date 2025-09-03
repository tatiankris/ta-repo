//В RxJS наблюдаемые объекты по умолчанию являются холодными, или одноадресными (unicast).

// Эти операторы могут сделать наблюдаемый объект горячим,
// или многоадресным (multicast), что позволяет распределять побочные эффекты между несколькими подписчиками.



//                                                  multicast
//Поделитесь ресурсом, используя Subject
//Example 1: multicast with standard Subject





//                                                  publish

import {interval, publish, tap} from "rxjs";

const source = interval(1000);
const example = publish()(source.pipe(
    //side effects will be executed once
    tap(_ => console.log('Do Something!')),
));

example.subscribe(...);
example.subscribe(...);

///Все субскрайбы не начнут выполняться до тех пор, пока не будет выполнен connect();
example.connect();



//share ⭐
//shareReplay ⭐


//У обычного Oservable тип Observable
// У горячего Observable тип ConnectableObservable (Т.е. подключаемый поток/ Observable/ наблюдаемый объект)
