// importar lib
const express = require("express");
const path = require("path");
const pages = require('./pages.js');

// iniciando o express
const server = express();

server
  // utilizar body do request
  .use(express.urlencoded({ extended: true}))
  // utilizando arquivos estáticos
  .use(express.static("public"))

  // configurar template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  // criar uma rota
  .get("/", pages.index)
  .get("/orphanages", pages.orphanages)
  .get("/orphanage", pages.orphanage)
  .get("/create-orphanage", pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500)