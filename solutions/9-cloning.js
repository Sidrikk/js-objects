// BEGIN
const cloneShallow = (obj) => {
    let cloneObj = {};
    for (let key in obj) {
        cloneObj[key] = obj[key];
    }
    return cloneObj;
}

export default cloneShallow;
// END
