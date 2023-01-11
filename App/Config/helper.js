function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function camelToBreadcrumbs(str) {
    return str?.replace?.(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

function camelToTitle(str) {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}


export {
    camelToTitle,
    camelToBreadcrumbs,
    randomIntFromInterval
}