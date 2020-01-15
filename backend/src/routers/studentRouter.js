const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const sha512 = require('../utils/pwdHashSalt')
const {dbSession} = require('../db/session')

let counter = 1

router.post('/students/signup', async (req, res) => {
    try {
        const student = req.body
        const pwdHashAndSalt = sha512(student.password)
        counter++
        await dbSession.createStudent(counter, student.email, pwdHashAndSalt.password, pwdHashAndSalt.salt)
        res.status(201).send()
    }
    catch(e){
        res.status(400).send()
    }
})

router.post('/students/login', async (req, res) => {
    try {

    }
    catch(e){

    } 
})

router.post('/students/logout', auth, async (req, res) => {
    try {

    }
    catch (e){
        
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