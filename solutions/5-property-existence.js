import _ from 'lodash';

// BEGIN
const countWords = (string) => {
    if (string.length == 0) return {};

    let lowerString = string.toLowerCase().split(' ');
    let obj = {};

    let uniqStrings = _.uniq(lowerString);

    for (let i of uniqStrings) {
        obj[i] = lowerString.filter(x => x == i).length;
    } 

    return obj;
}


export default countWords;
// END