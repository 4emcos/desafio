const express = require ('express');
const Equipamento = require('../models/equipamento');

const router = express.Router();


//Essa função é para cadastrar os equipamentos, ela verifica se há algum com a mesma refência, caso tenha, ela mostra o código 400, caso não ela cadastra no banco de dados.

router.post('/cadastrar-equipamento', async (req, res) => {
    const { referencia } = req.body;

    try {
        if (await Equipamento.findOne({ referencia }))
            return res.status(400).send({ error : 'Equipamento já cadastrado' })
    
        const equipamento = await Equipamento.create(req.body);

        return res.send({equipamento});

    } catch (err) {
        return res.status(400).send ({ error : "Falha no registro"});
    }
});



module.exports = app => app.use('/', router);