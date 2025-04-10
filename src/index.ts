function isPOJO(value: any): boolean {
    return value != null && [Object.prototype, null].includes(Object.getPrototypeOf(value));
}

function isCustomClassInstance(value: any): boolean {
    return !isPOJO(value) && Object.prototype.toString.call(value) === "[object Object]";
}

function isMap(value: any): value is Map<any, any> {
    return Object.prototype.toString.call(value) === "[object Map]";
}

function isSet(value: any): value is Set<any> {
    return Object.prototype.toString.call(value) === "[object Set]";
}

function isDate(value: any): value is Date {
    return Object.prototype.toString.call(value) === "[object Date]";
}

function isRegex(value: any): value is RegExp {
    return Object.prototype.toString.call(value) === "[object RegExp]";
}

export function clonify<T>(value: T): T {
    const refMap = new WeakMap();

    function clone(val: any): any {
        if (isDate(val)) return new Date(val);
        if (isRegex(val)) return new RegExp(val);
        if (isSet(val)) return new Set(Array.from(val).map(clone));
        if (isMap(val)) return new Map(Array.from(val).map(([k, v]) => [clone(k), clone(v)]));
        if (Array.isArray(val)) return val.map(clone);

        if (isPOJO(val) || isCustomClassInstance(val)) {
            if (refMap.has(val)) return refMap.get(val);
            const clonedObj = Object.create(Object.getPrototypeOf(val));
            refMap.set(val, clonedObj);

            for (const key of Reflect.ownKeys(val)) {
                clonedObj[key] = clone(val[key]);
            }

            return clonedObj;
        }

        return val;
    }

    return clone(value);
}
