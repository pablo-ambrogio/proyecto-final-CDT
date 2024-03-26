/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            modern: ['Modern Age']
        },
        colors: {
            primary: '#DA2B2B',
            secondary: '#213B73',
            blue2: '#11468F',
            degrade: '#6FA8F9',
            white: '#FFF',
            grey: '#D9D9D9',
            darkgrey: '#010101'
        },
        extend: {}
    }
}
