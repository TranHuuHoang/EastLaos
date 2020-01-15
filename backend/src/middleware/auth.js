const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, "eastlaossecret")

        if (decoded.type.localeCompare("student")){
            //retrieve user according to ID
            const user = "a"
        }
        else if (decoded.type.localeCompare("tutor")){
            const user = "a"
        }
        if (!user){
            throw new Error()
        }
        
        req.token = token
        req.user = user
        next()
    }
    catch (e) {
        res.status(401).send({error: 'Unauthenticated user!'})
    }
}
module.exports = auth