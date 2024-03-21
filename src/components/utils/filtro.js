const json_vuelos = [
    {
        availability: 5,
        data: '2020-11-15',
        origin: 'JFK',
        destination: 'SVO',
        price: 1200.5
    },
    {
        availability: 3,
        data: '2020-11-15',
        origin: 'JFK',
        destination: 'BOG',
        price: 197.68
    },
    {
        availability: 1,
        data: '2020-11-15',
        origin: 'CDG',
        destination: 'MAD',
        price: 300.3
    }
]

//TUS FILTROS DE BÚSQUEDA
const filters = { origin: 'JFK', destination: 'SVO', availability: 2 }

//Recorremos con un filter los resultados.
const vuelos = json_vuelos.filter(item => {
    //Filter devolverá el elemento solo si hay una respuesta positiva (TRUE) en las condiciones
    for (let key in filters) {
        if (item[key] === undefined) return false
        switch (key) {
            case 'availability':
                if (item[key] < filters[key]) return false
                break
            case 'data':
            case 'origin':
            case 'destination':
                if (item[key] != filters[key]) return false
                break
            default:
                break
        }
    }
    return true
})

console.log(vuelos)
