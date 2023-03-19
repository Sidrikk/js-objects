import _ from 'lodash';

// BEGIN
const fill = (obj1, props, obj2) => {
    let replace = _.pick(obj2, props);

    if (props.length == 0) {
        for (let key in obj2) {
            obj1[key] = obj2[key];
        }
        return obj1;
    }

    for (let key of props) {
        obj1[key] = replace[key]
    }

    return obj1;
}

export default fill;
// END