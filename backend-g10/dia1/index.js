const express = require('express')
const { prismaCliente } = require("@prisma/client");


const prisma = new prismaCliente();





// Se va a copiar toda la funcionabilidad de la libreria
const servidor = express()


// Middleware para convertir la informacion a un formato legible
//? El servidor podra convertir la informacion entrante para los JSON
servidor.use(express.json())
// para la urls 
// servidor.use(express.urlencoded())

servidor.get('/', (req, res) => {
    // req : Informacion que envia el cliente 
    // res : Informacion que devuelvo al cliente

    res.json({
        message : "Bienvenido a mi API"
    });
});



servidor.post('/productos', (req, res) => {
    console.log(req.body);

    res.json({
        message : "Producto creado exitosamente"
    });
});



servidor.listen(5000, () => {
    console.log('Servidor corriendo exitosamente en el puerto 5000');
});