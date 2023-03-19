// BEGIN
const pick = (obj, props) => {
    let newObj = {};

    for (let i in obj) {
        if (props.indexOf(i) != -1) {
            newObj[i] = obj[i];
        }
    }

    return newObj;
}

export default pick;
// END