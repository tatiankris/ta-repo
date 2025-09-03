///Для проверки на сайте:
//https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCwX7IRUJWHI9HY-HE-HGSRZGCqHaoAAsnhHjn8Zx9gAeHAAPh53nBqwUPGESoC58czAKYk4eB1PL30++oEeoAA-C-QPl+pA9GQANzBMkXCwPUjTZqg9yZmQSr3gA3iWa4mqACGcAykDfnyFRuhYfIXE634AMwAAygAAvv+5Hko0VLEpAABi8DwPsRK8vORBEk6kHQYBijsSgUHPryy6rqg65bvxnE5oJZA7rx-GVGQZBMDS7jQtue68jgh7Htwp5Pti9w6gA2gAuu+Dxfj+f68YOYCTg5jkOYuDAEEQrj7L8Cn7AA0vucGKCOaHIN+VKUJwzCBcOGTcGs36cOwiDSN8ihkXOC6+TG6H7r5xl8sFkB8qZ6VEN4ybUA0aHQBp-lRSUxm0D6oDxJAhipDgplvt+OANcVaV8RlPmtb5+4tW1dE+QNpU4L55VgVVOVzZVDDVb5e79jKNDwNIABW3WzRVjQrf2IBDk550XSOY1Eo5U0oC5GL2P5oDGfEoWoOFzCmd+wJyh4XgUXdS6ja1RIPUImC8ad9mXbDk6ieJ7Q1aAQO0E48K1Ao+5Kqs35cPEAwSJw97cnuCGva172fd9N7FoDCmifuCMmluaOQBjdSQDuQEgfNOKwShUVOGJyEIbjoAAIzEfweBEeRgFpQp9H7PukmpMkQOifRTNIRuSPK+03P6tDcOmyOauKcpeDGQlSXfMVCnLhUSlMPuxlRah6GYdh6iFfhGGSwArORvAe-0Xv8gAQtteFiARoAAEyESHYcFZhNJ6LHjoB4RAAcKemfJC7O2QPtLMJeAl0wxnEQ7C60N8speBXVfW7byVkMVISABwgoCAEIggCsIIA-CAD4AAiCADIgoCAEwggB8IIA7CDj4APCAD4voCALwgA-993Q+gPwgAMIKAgCCIHvq+L3vh+H93U8o5toAAMI0agrdu6nEdYThftxwHEvB2RoclJ7EKUcY7+2-EnFOADw5AL9JnUBoA84FyLqVBuPxGgP0pDQNi7QiToKpK3G2iUO5d28rgp+Ltiy8kAQHMKww4Ht2fGRMygFvIoKbqQnKpD8H0M7idE2ZtLrbh0iiPS-RCHPgAD5XA+sMHcSoqTMG6iTMmaUQB9z3oALhA96AHkQUAc895D27ofSegBGEAHnPfuM9ADiIGvGegBmEBnqAQAwiCaL0WvbuOip6AFEQGegAWEFAEPPeo8T4Dz7qPGeU9pSPxxExCW2NLzxTEWQHUCS7bYlJoLEcwt1xiDIJFfqIAh7z1noAbhAtEhIsdYhxfdt7dznt3MJU89590nl43xWjACSIN3TeASgnL1CYAaRBIkYOifABO+5BFrF0sIbhsj4neGSaI1JD4MnDiychS8qUSq4HaMkGJqtsHqxiUDfYuzRn7I4oc0ZihTkSyVAnPUpyE53J1LxIAA



////                                           infer

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

function getUser() { return { name: "Alice", age: 30 }; }

const TypeFooTypeof = typeof getUser;

type User = MyReturnType<typeof getUser>;

type ArrayElement<T> = T extends (infer U)[] ? U : never;


////                                         Mapped Types
type TypeK = {
    name: string
    index: number
}

type TypeKName = TypeK["name"]

type TOptional<T> = {
    [P in keyof T]?: T[P]
}

type TKeyTypeK = keyof TypeK
type TTypeKOptional = TOptional<TypeK>


const obj: TTypeKOptional


////                                             keyof
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

////                                          ReturnType<T>
type Predicate = (x: unknown) => { [key: string]: any };
type Ret = ReturnType<Predicate>

function f() {
    return { x: 10, y: 3 };
}
type FType = typeof f
type RetF = ReturnType<FType>


/////                                       typeof Array[number]
type MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type ArrAlice = MyArray[0]
type Person = MyArray[number]

//и теперь возьмем не тип , а сам массив
const ConstArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];

type PersonConst = typeof ConstArray[number]

type TConstArray = { name: string, age: number }[];
type TPersonConst = TConstArray[number]


/////                                   <T extends number | string>(stg: T) => {}
//такая запись без точного указания вход параметров
const foo1 = (arg: number): number => {
    return arg
}

//позволяет точно типизировать входящие параметры
const foo2 = <T extends number>(arg: T): number => {
    return arg
}

type Typefoo1 = typeof foo1
type Typefoo2 = typeof foo2
foo1(2)
foo2(2);

