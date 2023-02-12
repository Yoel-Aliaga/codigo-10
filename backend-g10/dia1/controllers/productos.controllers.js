import conexion from '../conector_db.js'

export const crearProducto = async (req, res) => {
const {body} = req

// buscar si existe la categoria 
const categoria = await conexion.categoria.findFirst({where:{id : +body.categoriaId}})
if (!categoria){
    return res.json({
        message : ' La categoria no existe ',
    })
}


const resultado = await conexion.producto.create({
    data: {
        // spread operator : usar el contenido pero no crea una nueva llave
        ...body,
        categoriaId: +body.categoriaId,

    }
})

return res.json({
    message: 'Producto creado exitosamente',
    content: resultado
})

}


export const toggleProducto = async (req, res)=> {
    // el toggle intercambia el estado como un switch 
    // habilita o deshabilita el producto
    const { id } = req.params
  // SELECT habilitado FROM productos WHERE id = ...
  const producto = await conexion.producto.findFirst({
    where: {
      id: +id,
    },
    select: {
      habilitado: true,
    },
  })

  if (!producto) {
    return res.json({ message: 'El producto no existe' })
  }

// nn !boolean > indicando que queremos el valor contrario
const resultado = await conexion.producto.update({
    where: { id: +id },
    data: {
      habilitado: !producto.habilitado,
    },
    // aparte de realizar la actualizacion indicaremos que columnas queremos visualizar como respuesta
    // NOTA: no es obligatorio solamente indicar la informacion que estamos actualizando
    // En select pones la informacion que quieres seleccionar, si no quieres se pondria false
    // pero se recomienda poner solo los que vamos a buscar osea solo los true    
    select: {
      habilitado: true, // se indican las columnas que queremos visualizar
    //   id : true,
    //   sku: true,
    },
  })

  return res.json({
    message: 'Producto ' + (resultado.habilitado === true ? 'habilitado' : 'desabilitado'),
  })




}
