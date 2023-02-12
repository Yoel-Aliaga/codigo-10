// ASi se importa en ECMAscript
import express from "express";
// import prisma from "@prisma/client";
import {
  crearCategoria,
  listarCategorias,
  buscarCategoriaPorId,
  actualizarCategoria,
  eliminarCategoria,
} from "./controllers/categorias.controllers.js";

import { productoRouter } from "./routes/productos.routes.js";

// ASi se importa utilizando commonjs
// const express = require('express')
// const { prismaCliente } = require("@prisma/client");

// const {crearCategoria} = require ('./controllers/categorias.controllers')

// const conexion = new prisma.PrismaClient();

// Se va a copiar toda la funcionabilidad de la libreria
const servidor = express();

// Middleware para convertir la informacion a un formato legible
//? El servidor podra convertir la informacion entrante para los JSON
servidor.use(express.json());
// para la urls
// servidor.use(express.urlencoded())

servidor.get("/", (req, res) => {
  // req : Informacion que envia el cliente
  // res : Informacion que devuelvo al cliente

  res.json({
    message: "Bienvenido a mi API",
  });
});

// Use : le podemos pasar un conjunto de rutas
servidor.use(productoRouter)
// Creas la ruta categorias, si es post ejecuta crearCategoria
servidor.route("/categorias").post(crearCategoria).get(listarCategorias);
servidor
  .route("/categoria/:id")
  .get(buscarCategoriaPorId)
  .put(actualizarCategoria)
  .delete(eliminarCategoria);

servidor.post("/productos", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Producto creado exitosamente",
  });
});

servidor.listen(5000, () => {
  console.log("Servidor corriendo exitosamente en el puerto 5000");
});
