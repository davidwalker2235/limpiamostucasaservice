const express = require("express");

const server = express();
server.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

server.get('/', function (req, res) {
    res.send('Saludos desde express');
});

server.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});