const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const sha512 = require('../utils/pwdHashSalt')
const generateAuthToken = require('../utils/generateToken')
const {dbSession} = require('../db/session')

let counter = 1

router.post('/students/signup', async (req, res) => {
    try {
        const student = req.body
        const pwdHashAndSalt = sha512(student.password)
        counter++
        await dbSession.createStudent({
            id: counter, 
            email: student.email, 
            password: pwdHashAndSalt.password, 
            salt: pwdHashAndSalt.salt
        })
        const token = generateAuthToken({id: counter}, 'student')
        res.status(201).send({
            token
        })
    }
    catch(e){
        res.status(400).send()
    }
})

router.post('/students/login', async (req, res) => {
    try {
        const check = req.body
        const student = await dbSession.findStudentByEmail(req.body.email)
        if (!student){
            throw new Error("Wrong email!")
        }
        const hashedPwd = sha512(student.password, student.salt)
        if (hashedPwd !== student.password){
            throw new Error("Invalid password!")
        }
        const token = generateAuthToken({id: student.id}, 'student')
        res.status(200).send({
            token
        })
    }
    catch(e){
        res.status(400).send(e.message)
    } 
})

router.post('/students/logout', auth, async (req, res) => {
    try {
        res.status(200).send(req.user)
    }
    catch (e){
        res.status(500).send()
    }
})

router.post('/student_regis_course', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

router.post('/student_unregis_course', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

module.exports = router