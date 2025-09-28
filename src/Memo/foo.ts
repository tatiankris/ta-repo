import {memoize1} from "./Memoize1.ts";

const foo = (value: number) => {
    const arr = Array(value)
    const newArr = arr.map((it, index) => ({name: `Name_${index}`, id: `id_${index}`}))
    return { name: value }
}

const memoizedFoo = memoize1(foo)

const dog1 = memoizedFoo(4)
const dog2 = memoizedFoo(4)

const memoizedFoo2 = memoize1(foo)

const cat1 = memoizedFoo2(4)
const cat2 = memoizedFoo2(4)

console.log("Dogs", dog1, dog2, dog1 === dog2)
console.log("Cats", cat1, cat2, cat1 === cat2)
console.log("DDCC", dog1 === cat1, dog2 === cat1, dog1 === cat2, dog2 === cat2);


const init = () => {
    return null
}

export { foo, memoizedFoo, init }
