function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42); // тип: number
const str = identity<string>("hello"); // тип: string



////
interface Lengthy {
    length: number;
}

///Дженерик можно зпэкстндить от Interface
function logLength<T extends Lengthy>(item: T): void {
    console.log(item.length);
}

logLength<string>("abc"); // 3
logLength<Array<number>>([1, 2, 3]); // 3
