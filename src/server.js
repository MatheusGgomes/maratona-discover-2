const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

server.set('view engine', 'ejs')

// mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

server.use(routes)

const porta = process.env.PORT || 3000

server.listen(porta, () => console.log('rodando'))