const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const {dbSession} = require('../db/session')

router.get('/course_details/:course_code', auth, async(req, res) => {
    try {
        const courseCode = req.params.course_code
        const course = await dbSession.findCourseByCode(courseCode)
        if (!course){
            throw new Error("Wrong Course Code!")
        }
        res.send({
            course_code: course.code,
            course_name: course.name,
            course_info: course.info
        })
    }
    catch (e) {
        res.status(404).send(e.message)
    }
})

router.get('/courses', auth, async (req, res) => {
    try {
        const allCourses = dbSession.allCourse()
        res.send(allCourses)
    }
    catch (e){
        res.status(500).send(e.message)
    }
})

// router.post('/courses', auth, async(req, res) => {
//     try {
//         let counter = await dbSession.maxCourseId()
//         if (!counter){
//             counter = 1
//         }
//         else {
//             counter++
//         }
//         await dbSession.createCourse({
//             id: counter,
//             code: req.body.code,
//             name: req.body.name,
//             info: req.body.info
//         })
//         const courseCreated = await dbSession.findCourseById(counter)
//         if (!courseCreated){
//             throw new Error("Course not created!")
//         }
//         res.send(courseCreated)
//     }
//     catch (e){
//         res.status(500).send(e.message)
//     }
// })

// router.delete('/courses', auth, async(req, res) => {
//     try {
        
//     }
//     catch (e){

//     }
// })

module.exports = router