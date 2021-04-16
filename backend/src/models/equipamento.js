const mongoose = require("../database/database");

// Modelo para o banco de dados dos equipamentos 
const EquipamentoSchema = new  mongoose.Schema(
  {
    nome: {
      type: String,
      lowercase: true,
      required: true,

    },

    responsavel: {
      type: String,
      lowercase: true,
      required: true,
    },

    categoria: {
      type: String,
      lowercase: true,
      required: true,
    },

    quantidade: {
      type: String,
      lowercase: true,
    },
    
    referencia: {
      type: String,
      lowercase: true,
      required: true,

    },

    

   createdAt:{
      type: Date,
      default: Date.now,
    }

  });


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Equipamento", EquipamentoSchema);