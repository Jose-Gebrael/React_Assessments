console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
//console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));

function deepEqual(object1, object2) {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;

    for (let key of objKeys1) {
        const value1 = object1[key];
        const value2 = object2[key];

        const isObjects = isObject(value1) && isObject(value2);

        if ((isObjects && !deepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
            return false;
        }
    }
    return true;
}

function isObject(object) {
    return object != null && typeof object === "object";
}