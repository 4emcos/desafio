const express = require ('express');
const Requisicoes = require('../models/requisicoes');
const Equipamento = require('../models/equipamento');
const { findByIdAndUpdate } = require('../models/equipamento');

const router = express.Router();



// Função que faz a ação de cadastrar novas requisições, até o momento ela verifica qual a peça requisitada e deminui do banco, caso tenha.
router.post('/requisicao', async (req, res) => {
    const refEquipamento = req.body.refEquipamento
    try {

            var objEquipamento = await Equipamento.findOne({referencia: refEquipamento})

            if (Number(req.body.quantidadeEquipamento) > Number(objEquipamento.quantidade)){
                return res.status(400).send({ error : 'Equipamento sem estoque para a quantidade pedida'})
            }
        
    
        const requisicao = await Requisicoes.create(req.body);
        
        await Equipamento.findByIdAndUpdate(
            {_id : objEquipamento._id},
            {quantidade: Number(objEquipamento.quantidade) - Number(req.body.quantidadeEquipamento)}, { new: true}
        )

        return res.send({requisicao});

    } catch (err) {
        return res.status(400).send ({ error : "Falha no registro"});
    }
});



module.exports = app => app.use('/', router);