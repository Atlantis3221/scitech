export const className = (clsName = '', allowedMods = [], props = {}) => {
    if (!Array.isArray(allowedMods)) {
        props = allowedMods
        allowedMods = Object.keys(props).map(name => props[name] === true ? name : undefined)
    }
    const classes = [clsName]
    for (let mod of allowedMods) {
        if (mod === undefined) {
            continue
        }
        props[mod] && classes.push(`${clsName}__${mod}`)
    }
    return classes.join(' ')
}