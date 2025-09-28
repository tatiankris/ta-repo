function deepEqual(a: any, b: any): boolean {
    if (a === b) return true;

    if (typeof a !== 'object' || a === null ||
        typeof b !== 'object' || b === null) {
        return false;
    }

    if (Array.isArray(a)) {
        if (!Array.isArray(b)) return false;
        if (a.length !== b.length) return false;

        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }

        return true;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!b.hasOwnProperty(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
}

const equalFunctions = {
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
                ? equalFunctions[paramsEqual](cacheParams, args)
                : cacheParams?.every((val, i) => val === args[i]) && cacheParams.length === args.length

            if (isParamsEqual && !resultEqual) {
                return cache;
            }

            if (resultEqual) {
                const newResult = foo(...args)
                const isResultEqual = equalFunctions[resultEqual](cache, newResult)

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
