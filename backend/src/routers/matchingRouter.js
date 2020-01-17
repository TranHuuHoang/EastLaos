const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const {dbSession} = require('../db/session')

// router.get('/match', auth, async (req, res) => {
//     try {

//     }
//     catch (e){

//     }
// })

// router.get('/subject', auth, async (req, res) => {
//     try {

//     }
//     catch (e){

//     }
// })

router.post('/student_match', auth, async (req, res) => {
    try {
        const courseCode = req.body.course_code
        const course = await dbSession.findCourseByCode(courseCode)
        if (!course){
            throw new Error("Wrong course code!")
        }
        await dbSession.createStudentMatch({
            studentId: req.user.id,
            courseId: course.id
        })
        res.status(201).send("Student successfully registered for matching!")
    }   
    catch (e){
        res.status(500).send(e.message)
    }    
})

router.post('/tutor_match', auth, async (req, res) => {
    try {
        const courseCode = req.body.course_code
        const course = await dbSession.findCourseByCode(courseCode)
        if (!course){
            throw new Error("Wrong course code!")
        }
        await dbSession.createTutorMatch({
            tutorId: req.user.id,
            courseId: course.id
        })
        res.status(201).send("Tutor successfully registered for matching!")
    }
    catch (e){
        res.status(500).send(e.message)
    }
})

router.delete('/student_match', auth, async (req, res) => {
    try {
        const courseCode = req.body.course_code
        const course = await dbSession.findCourseByCode(courseCode)
        if (!course){
            throw new Error("Wrong course code!")
        }
        await dbSession.deleteStudentMatch({
            studentId: req.user.id,
            courseId: course.id
        })
        res.send("Student unregistered for matching!")
    }
    catch (e){
        res.status(500).send(e.message)
    }
})

router.delete('/tutor_match', auth, async (req, res) => {
    try {
        const courseCode = req.body.course_code
        const course = await dbSession.findCourseByCode(courseCode)
        if (!course){
            throw new Error("Wrong course code!")
        }
        await dbSession.deleteTutorMatch({
            tutorId: req.user.id,
            courseId: course.id
        })
        res.send("Tutor unregistered for matching!")
    }
    catch (e){
        res.status(500).send(e.message)
    }
})

module.exports = router