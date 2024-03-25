const yearCurrent = new Date().getFullYear()

export const years = () => {
    let allYears = []
    for (let i = 2000; i <= yearCurrent; i++) {
        allYears.push(i)
    }
    return allYears
}

export const convertToLowerCase = data => {
    for (const key in data) {
        if (typeof data[key] === 'string') {
            data[key] = data[key].toLowerCase();
        }
    }
    return data
}