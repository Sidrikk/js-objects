// BEGIN
const make = (name, props = {}) => {
    let company = {
        'name': name,
        'state': props.hasOwnProperty('state') ? props.state : 'moderating',
        'createdAt': props.hasOwnProperty('createdAt') ? props.createdAt : Date.now(),
    }
    for (let key in props) {
        company[key] = props[key];
    }

    return company;
}

export default make;
// END