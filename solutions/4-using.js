// BEGIN
const getDomainInfo = (site) => {
    let siteInfo = {
        "scheme": site.split('://').length == 1 ? "http" : site.split('://')[0],
        "name": site.split('://').length == 1 ? site : site.split('://')[1]
    }
    return siteInfo;
}

export default getDomainInfo;
// END