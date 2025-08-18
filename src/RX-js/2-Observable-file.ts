import {Observable} from "rxjs";

///Здесь показано использование setInterval внутри new Observable
// А так же clearInterval внутри cleanup функции Observable

const observable = new Observable((subscriber) => {
    let count = 0

    const id = setInterval(() => {
        if (count === 2) {
            subscriber.complete()
        }

        subscriber.next(count)
        count++
    }, 1000)

    /////Cleanup функция, происходит, при отписке от observable ( при вызове unsubscribe )
    return () => {
        clearInterval(id)
        console.log("In cleanup")
    }
})

observable.subscribe({
    next(x) {
        console.log(x)
    },
    complete() {
        console.log("Completed")
    }
})


// !! ВАЖНО
// subscriber.complete() и subscriber.error() могут выполняться только один раз в течение выполнения Observable,
// и может быть только либо error либо complete (ТОЧНО?? НЕ ЗНАЮ НАСЧЕТ ЭТОГО).
