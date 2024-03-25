const { Router } = require('express')
const transporter = require('../../config/nodemailer')
const nodemailer = Router()

nodemailer.post('/', async (req, res) => {
    const { email, name } = req.body
    await transporter.sendMail({
        from: 'AutoGo <proyectoautogo@gmail.com>',
        to: `${email}`,
        subject: 'Confirma tu cuenta de AutoGo',
        html: `<!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <h1>Te damos la bienvenida a AutoGo</h1>
                <p>
                    Hola ${name}, por favor confirma tu cuenta para ingresar a tu
                    perfil.
                </p>
                <button>Confirmar cuenta</button>
                <p>Si tienes alguna duda puedes visitar nuestro centro de ayuda.</p>
                <p>¡Saludos!</p>
                <p>Equipo de AutoGo</p>
            </body>
        </html>
        `
    })
})
module.exports = nodemailer
