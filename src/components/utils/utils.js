const yearCurrent = new Date().getFullYear()

export const years = () => {
    let allYears = []
    for (let i = 2000; i <= yearCurrent; i++) {
        allYears.push(i)
    }
    return allYears
}


