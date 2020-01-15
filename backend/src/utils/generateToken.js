const jwt = require('jsonwebtoken')

const generateAuthToken = (user, user_type) => {
    return jwt.sign({id: user.id, type:user_type}, "eastlaossecret")
}

module.exports = generateAuthToken