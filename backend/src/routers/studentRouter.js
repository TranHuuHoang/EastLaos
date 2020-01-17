const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const sha512 = require('../utils/pwdHashSalt')
const generateAuthToken = require('../utils/generateToken')
const {dbSession} = require('../db/session')

router.post('/students/signup', async (req, res) => {
    try {
        const student = req.body
        const pwdHashAndSalt = sha512(student.password)
        let counter = await dbSession.maxStudentId()
        if (!counter){
            counter = 1
        }
        else {
            counter++
        }
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
        const student = await dbSession.findStudentByEmail(check.email)
        if (!student){
            throw new Error("Wrong email!")
        }
        const hashedPwd = sha512(check.password, student.salt)
        if (hashedPwd.password !== student.password){
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
        res.send("Successfully Logged Out")
    }
    catch (e){
        res.status(500).send()
    }
})

router.post('/student_subscribe_course', auth, async (req, res) => {
    try {
        const courseCode = req.body.course_code
        const course = await dbSession.findCourseByCode(courseCode)
        if (!course){
            throw new Error("Wrong course code!")
        }
        await dbSession.createStudentSubscription({
            studentId: req.user.id,
            courseId: course.id
        })
        res.send("Successfully subscribed the course!")
    }
    catch (e){
        res.status(500).send(e.message)
    }
})

router.post('/student_unsubscribe_course', auth, async (req, res) => {
    try {
        const courseCode = req.body.course_code
        const course = await dbSession.findCourseByCode(courseCode)
        if (!course){
            throw new Error("Wrong course code!")
        }
        await dbSession.deleteStudentSubscription({
            studentId: req.user.id,
            courseId: course.id
        })
        res.send("Successfully unsubscribed the course!")
    }
    catch (e){
        res.status(500).send(e.message)
    }
})

module.exports = router