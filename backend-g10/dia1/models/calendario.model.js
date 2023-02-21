import mongoose from "mongoose";

const diasSchema = new mongoose.Schema(
  {
    dia: {
      type: mongoose.Schema.Types.String,
      enum: ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"],
    },
  },
  { _id: false } // no se requiere crear el atributo _id para cuando se cree un diaSchema
);

const calendarioSchema = new mongoose.Schema({
  titulo: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  descripcion: mongoose.Schema.Types.String,
  hora_inicio: {
    type: mongoose.Schema.Types.String,
    validate: {
      validator: (valor) => {
        return /([0-2][0-9]:[0-5][0-9])/.test(valor);
      },
      message: "El formato debe ser desde 00:00 hasta 23:59",
    },
  },
  hora_fin: mongoose.Schema.Types.String,
  dias: {
    type: [diasSchema],
  },

  // Indicando a que usuario le pertenece este calendario y cuando querramos devolver el calendario con el usuario sera mas practico hacer la busqueda
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export const CalendarioModel = mongoose.model("calendarios", calendarioSchema);