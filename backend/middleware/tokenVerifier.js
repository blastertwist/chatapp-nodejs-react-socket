require('dotenv').config()
const jwt = require('jsonwebtoken')

const tokenVerifier = (req, res, next) => {
    const token = req.headers['x-access-token']
    if (token == null) return res.status(401).send({
        'status': 'TOKEN_REQUIRED',
        'message': 'Token is not found in the request, please provide token to continue...'
    })
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, load) => {
        if (err) return res.status(401).send({
            'status': 'TOKEN_INVALID',
            'message': 'Error verifying token, please try again...'
        })

        res.locals.id = load.id
        next()
    })

}

module.exports = tokenVerifier