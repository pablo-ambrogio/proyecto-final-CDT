const express = require('express')
const cors = require('cors')
const server = express()

// // Routes
const nodemailer = require('./routes/nodemailer-rutas')

server.use(cors())
server.use(express.json())
server.use('/nodemailer', nodemailer)

module.exports = server
