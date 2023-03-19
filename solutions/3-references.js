// BEGIN
const compareObj = (obj1, obj2) => {
    if (obj1.name != obj2.name || obj1.state != obj2.state || obj1.website != obj2.website) {
        return false;
    }
    return true;
}

export default compareObj;
// END