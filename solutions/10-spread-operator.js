// BEGIN
const make = (name, props) => {
    console.log(props);
    let company = {
        'name': name,
        'state': state in props ? props[state] : 'moderating',
        'createdAt': createdAt in props ? props[createdAt] : Date.now(),
    }
    for (let key in props) {
        company[key] = props[key];
    }

    return company;
}

export default make;
// END