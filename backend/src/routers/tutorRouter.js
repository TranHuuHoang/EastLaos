const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const sha512 = require('../utils/pwdHashSalt')
const generateAuthToken = require('../utils/generateToken')
const {dbSession} = require('../db/session')


router.post('/tutors/signup', async (req, res) => {
    try {
        const tutor = req.body
        const pwdHashAndSalt = sha512(tutor.password)
        const counter = await dbSession.maxTutorId
        if (!counter){
            counter = 1
        }
        else {
            counter++
        }
        await dbSession.createTutor({
            id: counter, 
            email: tutor.email, 
            password: pwdHashAndSalt.password, 
            salt: pwdHashAndSalt.salt
        })
        const token = generateAuthToken({id: counter}, 'tutor')
        res.status(201).send({
            token
        })
    }
    catch(e){
        res.status(400).send()
    }
})

router.post('/tutors/login', async (req, res) => {
    try {
        const check = req.body
        const tutor = await dbSession.findTutorByEmail(check.email)
        if (!tutor){
            throw new Error("Wrong email!")
        }
        const hashedPwd = sha512(check.password, tutor.salt)
        if (hashedPwd.password !== tutor.password){
            throw new Error("Invalid password!")
        }
        const token = generateAuthToken({id: tutor.id}, 'tutor')
        res.status(200).send({
            token
        })
    }
    catch(e){
        res.status(400).send(e.message)
    } 
})

router.post('/tutors/logout', auth, async (req, res) => {
    try {
        res.send("Successfully Logged Out")
    }
    catch (e){
        res.status(500).send()
    }
})

router.post('/tutor_regis_course', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

router.post('/tutor_unregis_course', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

module.exports = router