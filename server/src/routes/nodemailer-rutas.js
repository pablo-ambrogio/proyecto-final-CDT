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
            <body style="display: flex; flex-direction: column; justify-content: center; text-align: center; max-width: 600px">
                <div style="background: #11468f; display: flex; flex-direction: column; align-items: center; padding: 20px">
                    <img src="https://r2.easyimg.io/cbpm7ea7v/logorojo_1.svg" alt="" style="height: 100px" />
                </div>
        
                <h1 style="font-family: Arial, Helvetica, sans-serif">Te damos la bienvenida a <strong>AutoGo</strong></h1>
                <p style="font-family: Arial, Helvetica, sans-serif">
                    Hola
                    <span style="color: #11468f"><strong> ${name} ${lastname} </strong> </span>, por favor confirma tu cuenta
                    para ingresar a tu perfil.
                </p>
                <div style="display: flex; align-items: center; flex-direction: column">
                    <a
                        href="http://localhost:5173/"
                        style="
                            padding: 15px 20px;
                            border: none;
                            background: red;
                            color: white;
                            font-weight: bold;
                            cursor: pointer;
                            font-family: Arial, Helvetica, sans-serif;
                            text-decoration: none;
                            border-radius: 5px;
                        "
                    >
                        CONFIRMAR CUENTA
                    </a>
                </div>
                <p style="font-family: Arial, Helvetica, sans-serif">
                    Si tienes alguna duda puedes visitar nuestro
                    <a href="#">centro de ayuda</a>.
                </p>
                <p style="font-family: Arial, Helvetica, sans-serif">
                    ¡Saludos!<br />
                    <strong> Equipo de AutoGo </strong>
                </p>
            </body>
        </html>
        `
    })
})
module.exports = nodemailer
