const mongoose = require("../database/database");
const bcrypt = require('bcryptjs')

// Modelo para o banco de dados dos usuários 
const UserSchema = new  mongoose.Schema(
  {
    nome:{
      type: String,
      required: true,
      lowercase: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      lowercase:true,
    },
    
    funcao: {
      type: String,
      required: true,
      lowercase: true,
    },
    
    senha:{
      type: String,
      required: true,
      select: false
    },


    createdAt:{
      type: Date,
      default: Date.now,
    }
  });



// crypt da senha
UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  next();
});


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);