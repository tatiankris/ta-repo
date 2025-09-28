const init = () => {}
import {MyObservable} from "./ObservableImplement.ts"

function myOf<T> (...args: T[]) {
    return new MyObservable((subscriber) => {
        for (const arg of args) {
            subscriber.next(arg)
        }
        subscriber.complete()
    })
}

function myFrom<T> (args: T[]) {
    return new MyObservable((subscriber) => {
        for (const arg of args) {
            subscriber.next(arg)
        }
        subscriber.complete()
    })
}

////ПРИМЕРЫ
const ofMyObservable = myOf(1, 2, 3, 5, 66)
ofMyObservable.subscribe({
    next: (value) => console.log("OF==:", value),
    complete: () => console.log("OF---complete"),
})

const fromMyObservable = myFrom([1, 2, 3, 5, 66])
fromMyObservable.subscribe({
    next: (value) => console.log("FROM==:", value),
    complete: () => console.log("FROM---complete"),
})

export {init, myOf, myFrom};
