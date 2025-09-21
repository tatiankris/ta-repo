
const memoize1 = <P, R>(foo: (params?: P) => R): typeof foo => {
    let cache = null
    let cacheParams = null

    return function (params): R {
        // debugger
        if (params && params === cacheParams) {
            return cache
        }

        const newResult = foo(params);
        if (newResult === cache) {
            return cache
        }

        cache = newResult
        cacheParams = params
        return cache
    };
}

const memoize2 = <P extends any[], R>(foo: (...params: P) => R): typeof foo => {
    let cache = null
    const mapka = new Map()
    let cacheParams = null

    return function (...params): R {

        const parr = params.map((val) => {

        })
        // debugger
        if (params && params === cacheParams) {
            return cache
        }

        const newResult = foo(...params);
        if (newResult === cache) {
            return cache
        }

        cache = newResult
        cacheParams = params
        return cache
    };
}

// это будет с мапом, а еще сделать с возможностью добавить isRqual для ссылочных типов

const memoize3 = <P extends any[], R>(foo: (...params: P) => R, isEqual?: boolean): typeof foo => {
    let cache = null
    let cacheParams = {}

    return function (...params): R {

        let newParams = {}
        params?.forEach((val, index) => {
            if (!isEqual) {
                newParams[index] = val;
                return;
            }

            if (val !== null && typeof val === "object" || typeof val === "function") {
                newParams[index] = JSON.stringify(val); //@TODO мб переделать получше
                return;
            }
            newParams[index] = val;
            return;
        })

        const res = params.filter((val, index) => {
            if (cacheParams[index]) {
                return cacheParams[index] === newParams[index]
                ///проверить с isEqual мб
            }
            return false;
        })

        if (res.length === params.length) {
            return cache;
        }
        cacheParams = newParams
        const cache = foo(...params);

        return cache
    };
}


////версия 1 реализации с deepEqual по параметрам и по резуьтату
const deepEqual1 = (prevValue: any, newValue: any) => {
    return prevValue === newValue ///@TODO
}
const equalFunctions = {
    deepEqual: () => {}
}
type TOptions = {
    paramsEqual?: "deepEqual";
    resultEqual?: "deepEqual";
}

const memoize4 = <P extends any[], R>(foo: (...args: P) => R, options?: TOptions): typeof foo => {
    let cache = null
    let cacheParams = []

    return function (...args): R {
        const { paramsEqual, resultEqual } = options || {};

        ///если нет кэша
        if (!cache) {
            cacheParams = args
            cache = foo(...args)
        }

        ///кэш есть, но параметров нет и не было. Нет сравнения по результату.
        if (!args.length && !cacheParams.length && !resultEqual) {
            return cache
        }

        ///кэш есть, есть какой-то из параметров, либо оба параметров.  Нет сравнения по параметрам или результату.
        if (!paramsEqual && !resultEqual) {
            const isSameValues = cacheParams?.every((val, i) => val === args[i])
            const isSameLength = cacheParams.length === args.length
            if (isSameLength && isSameValues) {
                return cache
            }
        }

        //Сравнение по параметрам. Нет сравнения по результату.
        if (paramsEqual && !resultEqual) {
            const isEqual = deepEqual(cacheParams, args)
            if (isEqual) {
                return cache
            }
            cacheParams = args
            cache = foo(...args)
            return cache
        }

        //Сравнение по результату. Нет сравнения по параметрам.
        if (resultEqual && !paramsEqual) {
            const newResult = foo(...args)
            const isEqual = deepEqual(foo(...cacheParams), newResult)
            if (isEqual) {
                return cache
            }
            cacheParams = args
            cache = newResult
            return cache
        }

        //Сравнение и по параметрам, и по результату.
        if (resultEqual && paramsEqual) {
            const newResult = foo(...args)
            const isEqualParams = deepEqual(cacheParams, args)
            const isEqualResult = deepEqual(foo(...cacheParams), newResult)
            if (!isEqualParams || !isEqualResult) {
                cacheParams = args
                cache = newResult
            }
        }

        return cache
    };
}


///////версия-2 (улучшила код, читаемость) реализации с deepEqual по параметрам и по резуьтату













///////// КАСТОМНАЯ ФУНКЦИЯ НА ДИП ИКУАЛ
function deepEqual(a: any, b: any): boolean {
    if (a === b) return true;

    if (typeof a !== 'object' || a === null ||
        typeof b !== 'object' || b === null) {
        return false;
    }

    // Массивы
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) return false;
        if (a.length !== b.length) return false;

        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }

        return true;
    }

    // Объекты
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!b.hasOwnProperty(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
}


/////////////ЛУЧШАЯ ВЕРСИЯ ПОКА ЧТО
const equalFunctions2 = {
    deepEqual: deepEqual,
}

type TOptions2 = {
    paramsEqual?: "deepEqual";
    resultEqual?: "deepEqual";
}

const memoize5 = <P extends any[], R>(foo: (...args: P) => R, options?: TOptions2): typeof foo => {
    let cache = null
    let cacheParams = []

    return function (...args): R {
        const { paramsEqual, resultEqual } = options || {};

        const hasCache = cache !== null;

        if (hasCache) {

            const isParamsEqual = paramsEqual
                ? equalFunctions2[paramsEqual](cacheParams, args)
                : cacheParams?.every((val, i) => val === args[i]) && cacheParams.length === args.length

            if (isParamsEqual && !resultEqual) {
                return cache;
            }

            if (resultEqual) {
                const newResult = foo(...args)
                const isResultEqual = equalFunctions2[resultEqual](cache, newResult)

                if (!paramsEqual && isResultEqual) {
                    return cache;
                }

                if (isParamsEqual && isResultEqual) {
                    return cache;
                }
            }
        }

        cacheParams = args
        cache = foo(...args)

        return cache;
    };
}





export { memoize1 };
