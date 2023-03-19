// BEGIN
const get = (obj, props) => {
    for (let prop of props) {
        if (Object.hasOwn(obj, prop)) {
            obj = obj[prop]
        } else {
            return null;
        }
    }

    return obj;
}

export default get;
// END