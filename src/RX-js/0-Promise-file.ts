///Тут я хочу продемонстрировать, что Promise — распространённый тип push-систем в JavaScript.
////Push-система - это когда производитель данных, т.е. промис, сам решает когда отдать данные,
/// а мы можем как бы "подписаться" на получение этих данных.

/// Три функции ниже как бы подписываются на изменения промиса, и все при резолве получают одно и то же значение.

///Минусы промиса - он исполняется только один раз.
/// При запуске файла мы получаем в консоли:
// foo1 2
// foo2 2
// foo3 2


const promise = new Promise((res) => {
    setInterval(() => {
        console.log("in promise")
        res(2)
    }, 2000)
})


const foo1 = () => {
    promise.then((result) => {
        console.log("foo1", result)
    })
}

const foo2 = () => {
    promise.then((result) => {
        console.log("foo2", result)
    })
}

const foo3 = () => {
    promise.then((result) => {
        console.log("foo3", result)
    })
}


foo1()
foo2()
foo3()

