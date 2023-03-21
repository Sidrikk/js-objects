// BEGIN
const getSortedNames = (users) => {
    let sortedNames = [];
    for (let user of users) {
        sortedNames.push(user.name)
    }
    return sortedNames.sort();
}

export default getSortedNames;
// END