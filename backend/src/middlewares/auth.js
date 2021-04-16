const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


// aqui é onde se verifica a autenticidade do token
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send ({error: "Nenhum token foi gerado"});
    
    const parts = authHeader.split(' ');

    if(!parts.length == 2)
        return res.status(401).send ({error: 'Erro de Token'});
    
    const [ scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error : 'Token malformado'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: 'Token inválido'});

        req.usersId = decoded.id;
        return next();


    })
};