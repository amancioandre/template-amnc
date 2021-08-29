const thresholds = {
    "k": {
        min: 1000,
        max: 999999
    },
    "m": {
        min: 1000000,
        max: 999999999
    }
}

const evaluateThreshold = (n) => {
    const selected = Object.keys(thresholds).filter(k => {
        return n >= thresholds[k].min && n <= thresholds[k].max
    })

    if (selected.length === 0) {
        return n
    }
    return `+ 1${selected[0]}`
}
