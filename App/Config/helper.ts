function randomIntFromInterval(
    min: number,
    max: number
) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function camelToBreadcrumbs(
    str: string
) {
    return str?.replace?.(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
}

function camelToTitle(
    str: string
) {
    let result = str.replace(/([A-Z])/g, " $1")
    result = result.charAt(0).toUpperCase() + result.slice(1)
    return result.split('[')[0]
}

function compare(
    a: any,
    b: any
) {
    if (a.value < b.value) {
        return -1
    }
    if (a.value > b.value) {
        return 1
    }
    return 0
}

function getId() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export {
    compare,
    camelToTitle,
    camelToBreadcrumbs,
    randomIntFromInterval,
    getId
}