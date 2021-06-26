require('dotenv').config();
const { sign, verify } = require('jsonwebtoken')

const JWT_SECRECT = process.env.JWT_SECRECT;

const createTokens = (user) => {
    const accessToken = sign({ id: user.iduser },
        JWT_SECRECT
    );
    return accessToken
}

const validateToken = (req, res, next) => {
    try {
        const accessToken = req.cookies['Ment-login-token']
        if (!accessToken) return res.status(401).json({ error: 'Permissão Negada' })

        const validToken = verify(accessToken, JWT_SECRECT);
        if (validToken) {
            req.authenticated = true;
            req.userid = validToken.id;
            return next();
        }
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

module.exports = { createTokens, validateToken }