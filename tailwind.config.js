/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            modern: ['Modern Age']
        },
        colors: {
            red: '#DA1212',
            blue: '#041562',
            blue2: '#11468F',
            degrade: '#89A3C8',
            white: '#FFF',
            grey: '#D9D9D9',
            darkgrey: '#010101'
        },
        extend: {}
    }
}
