const express = require ('express');
const bcrypt = require ('bcryptjs')
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const authConfig = require ('../config/auth.json')
const router = express.Router();



function generateToken( params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn : 86400,
    });

}

// função para carastrar novos usuários
router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error : 'Email já cadastrado' })
    
        const user = await User.create(req.body);

        user.senha = undefined;

        return res.send({user,
                        token: generateToken({id : user.id})
                        });

    } catch (err) {
        return res.status(400).send ({ error : "Falha no registro"});
    }
});

//função para autenticar os usuários
router.post('/authenticate', async (req,res) => {
    const { email, senha } = req.body

    const user = await User.findOne({ email }).select('+senha');

    if (!user)
        return res.status(400).send ({ error : "Usuário não encontrado"});

    if (!await bcrypt.compare(senha, user.senha))
        return res.status(400).send({error : "Senha inválida "});

        user.senha = undefined;

    res.send({user, 
             token: generateToken({id : user.id})
            });

});



module.exports = app => app.use('/auth', router);