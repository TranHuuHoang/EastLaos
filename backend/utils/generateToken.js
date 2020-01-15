const jwt = require('jsonwebtoken')

const generateAuthToken = (user) => {
    return jwt.sign({id: user.id}, "eastlaossecret")
}

module.exports = generateAuthToken