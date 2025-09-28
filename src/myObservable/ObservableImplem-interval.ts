const init = () => {}
import {MyObservable} from "./ObservableImplement.ts";

function myInterval<T> (delay: number) {
    return new MyObservable((subscriber) => {
        let i = 0
        const idInterval = setInterval(() => {
            subscriber.next(i++)
        }, delay)

        return () => {
            clearInterval(idInterval)
        }
    })
}

////ПРИМЕРЫ
const intervalMyObservable = myInterval(1000)
const subscription = intervalMyObservable.subscribe({
    next: (value) => console.log("Interval==:", value),
    complete: () => console.log("Interval---complete"),
})

setTimeout(() => {
    subscription.unsubscribe()
}, 5000)


let subscription2
setTimeout(() => {
    subscription2 = intervalMyObservable.subscribe({
        next: (value) => console.log("Interval==:", value),
        complete: () => console.log("Interval---complete"),
    })
}, 7000)

setTimeout(() => {
    subscription2.unsubscribe()
}, 12000)

export {init, myInterval}
