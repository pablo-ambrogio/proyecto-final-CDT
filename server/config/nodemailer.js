const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: 'proyectoautogo@gmail.com',
        pass: 'uwtn qjos ivbi cgte'
    }
})

transporter
    .verify()
    .then(() => console.log('gmail enviado con exito!...'))
    .catch(error => console.error(error))

module.exports = transporter
