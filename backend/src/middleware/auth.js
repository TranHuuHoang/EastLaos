const jwt = require('jsonwebtoken')
const {dbSession} = require('../db/session')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, "eastlaossecret")
        if (decoded.type === "student") {
            //retrieve user according to ID
            user = await dbSession.findStudentById(decoded.id)
        } else if (decoded.type === "tutor") {
            user = await dbSession.findTutorById(decoded.id)
        }
        if (!user){
            throw new Error()
        }
        
        req.token = token
        req.user = user
        next()
    }
    catch (e) {
        console.log("error:", e.message)
        res.status(401).send({error: 'Unauthenticated user!'})
    }
}
module.exports = auth