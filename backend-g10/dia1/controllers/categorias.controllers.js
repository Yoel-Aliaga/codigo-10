// Exporta ECMAscript
import conexion from "../conector_db.js";

export const crearCategoria = async (req, res) => {
  const { body } = req;
  console.log(body);

  const respuesta = await conexion.categoria.create({
    data: {
      nombre: body.nombre,
    },
  });

  res.json({
    message: " Se creo la categoria exitosamente",
    content: respuesta,
  });
};

export const listarCategorias = async (req, res) => {
  const respuesta = await conexion.categoria.findMany();

  res.json({
    content: respuesta,
  });
};

export const buscarCategoriaPorId = async (req, res) => {
  console.log(req.params);

  //   Busca el primero que sea igual al id buscado
  const { id } = req.params;
  //  OJO :  +id es como parseInt() , sirve para pasar de string a entero o float

  // include : sirve para indicar si queremos algun modelo vecino
  const resultado = await conexion.categoria.findFirst({ where: { id: +id }, include:{productos:true} });

  if (!resultado) {
    return res.json({
      message: "Categoria no existe",
    });
  }
  // no se puede enviar 2 o mas respuestas al cliente porque la conexion ya termino
  // por eso usamos el teturno o el else
  else {
    //   La respuesta en json
    return res.json({
      content: resultado,
    });
  }
};

export const actualizarCategoria = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  // Buscar primero si la categoria existe
  const categoria = await conexion.categoria.findFirst({
    where: {
      id: +id,
    },
  });

if(!categoria){
    return res.json({
        message : 'La categoria no existe',
    })
}

  const resultado = await conexion.categoria.update({
    data: {
      nombre: body.nombre,
    },
    where: {
      id: +id,
    },
  });

  return res.json({
    content: resultado,
  });
};

export const eliminarCategoria = async (req, res) => {
    const {id} = req.params
    const categoriaEncontrada = await conexion.categoria.findFirst({where:{id:+id}})

    if (!categoriaEncontrada){
        return res.json({
            message : 'La categoria no existe',
        })
    }

    await conexion.categoria.delete({where:{id:+id}})
    return res.json({
        message : "Categoria eliminada exitosamente",
    })


}






// Exporta commonjs

// module.exports = {
//     crearCategoria,
// };
