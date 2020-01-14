const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        // const token = req.header('Authorization').replace('Bearer ', '')
        // const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // //the 'tokens.token' part is used to authorize the current token to see if it's still valid.
        // const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        // if (!user){
        //     throw new Error()
        // }
        // req.token = token
        // req.user = user
        next()
    }
    catch (e) {
        res.status(401).send({error: 'Unauthenticated user!'})
    }
}
module.exports = auth