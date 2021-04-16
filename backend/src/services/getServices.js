const express = require ('express')
const Equipamento = require ('../models/equipamento');

const Requisicoes = require('../models/requisicoes')

const router = express.Router();


// Função para pegar os dados dos bancos de dados e enviar para o fron-end

  router.get('/equipamentos', async (req, res) => {
    try {
      Equipamento.find({}, function(err, equipamentos){
            res.send(equipamentos)
        })
    } catch (err) {
        return res.status(400).send ({ error : "Sem requisições"});
    }

});


router.get('/requisicoes', async (req, res) => {
  try {
      Requisicoes.find({}, function(err, requisicoes){
          res.send(requisicoes)
      })
  } catch (err) {
      return res.status(400).send ({ error : "Sem requisições"});
  }

});


module.exports = app => app.use('/', router);