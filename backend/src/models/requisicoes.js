const mongoose = require("../database/database");

// Modelo para o banco de dados das requisições  
const RequisicoesSchema = new  mongoose.Schema(
  {
    
    nomeRequisitante: {
      type: String,
      lowercase: true,
      required: true,

    },

   /* refRequisicao:{
      type: String,
      lowercase: true,
      required: true,
    },*/

    refEquipamento: {
      type: String,
      lowercase: true,
      required: true,
    },

    quantidadeEquipamento:{
      type:String,
      lowercase: true,
      required: true,
    },

    reqFechada: {
      type: Boolean,
      lowercase: true,
    },

   dataReq:{
      type: Date,
      default: Date.now,

    }

  });


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Requisicoes", RequisicoesSchema);