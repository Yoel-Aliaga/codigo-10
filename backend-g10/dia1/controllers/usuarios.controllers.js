import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


const usuarios = [];

export const registroUsuario = async (req, res) => {
  // Recibimos los datos del body
  const data = req.body;

  // Encriptar la contraseña , el 10 es el número de vueltas con que se mezclara la cadena de texto
  const passwordHashed = bcrypt.hashSync(data.password, 10);
  console.log(passwordHashed);

  //TODO reemplazar por la base de datos
  usuarios.push({ ...data, password: passwordHashed });

  return res
    .json({
      message: "Usuario creado exitosamente",
    })
    .status(201);
};


export const login = async (req, res) => {
  const data = req.body;

  // TODO reemplazar con la base de datos
  // encontrar al usuario en el arreglo
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.correo === data.correo
  );

  if (!usuarioEncontrado) {
    return res.status(404).json({
      message: "Usuario no existe",
    });
  }

  const resultado = bcrypt.compareSync(
    data.password,
    usuarioEncontrado.password
  );




  if (resultado) {
// Esta es la informacion adicional que usara la token
const payload = {
    correo: usuarioEncontrado.correo,
    mensaje : " hola",
}
// Aqui crea la token
const token = jwt.sign(payload,"clavesecreta", {
    expiresIn: "1h",
})


    return res.json({
      message: "Bienvenido",
      content: token
    });
  } else {
    return res.status(403).json({
      message: "Usuario no existe",
    });
  }
};
