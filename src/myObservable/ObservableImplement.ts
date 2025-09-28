const init = () => {}
/////

const voidFunction = () => {}

type TSubscriber<T> = {
    next: (value: T) => void,
    error?: (error: any) => void,
    complete?: () => void,
}

type TSubscriberFunction<T> = (subscriber: Required<TSubscriber<T>>) => void

class MyObservable<T> {
    private _subscribers = new Map()
    private _subscriberFunction: TSubscriberFunction<T>

    constructor(subscriberFunction: TSubscriberFunction<T>) {
        this._subscriberFunction = subscriberFunction
    }

    subscribe = (subscriber: TSubscriber<T> | ((value: T) => void)) => {this
        const subscriberId = Symbol()

        if (typeof subscriber === "function") {
            this._subscribers.set(subscriberId, {
                next: subscriber,
                complete: voidFunction,
                error: voidFunction
            })
        } else {
            this._subscribers.set(subscriberId, {
                next: subscriber.next,
                complete: subscriber.complete ?? voidFunction,
                error: subscriber.error ?? voidFunction
            })
        }

        const activeSubscriber = this._subscribers.get(subscriberId)
        this._subscriberFunction(activeSubscriber)

        return {
            unsubscribe: () => {
                if (activeSubscriber.complete) {
                    activeSubscriber.complete();
                }

                this._subscribers.delete(subscriberId)
            }
        }
    }
}

const myObservable = new MyObservable((subscriber) => {
    subscriber.next(3)
    setTimeout(() => {
        subscriber.next(5)
        subscriber.complete()
    }, 2000)
})

myObservable.subscribe((v) => console.log("obsMYYYY--:", v))
myObservable.subscribe({
    next: (v) => console.log("obsMy--1111", v),
    complete: () => console.log("1111--Complete")
})

export {init, MyObservable};
