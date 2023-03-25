import crc32 from 'crc-32';

// BEGIN
export const make = () => {
    return [];
}

export const set = (map, key, value) => {
    let index = crc32.str(key);

    if (map[index] && map[index][0] != key) {
        return false;
    }

    map[index] = [key, value];
    return true;
}

export const get = (map, key, defaultValue = null) => {
    let index = crc32.str(key);

    if (map[index] && map[index][0] != key) return defaultValue;

    if (map[index]) return map[index][1];
    
    return defaultValue;
}
// END