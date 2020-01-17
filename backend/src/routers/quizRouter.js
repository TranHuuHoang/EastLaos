const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const {dbSession} = require('../db/session')

// router.get('/quiz_mark', auth, async (req, res) => {
//     try {

//     }
//     catch (e){

//     }
// })

// router.get('/leaderboard', auth, async (req, res) => {
//     try {

//     }
//     catch (e){
        
//     }
// })

router.get('/quiz/:course_code', auth, async (req, res) => {
    try {
        // const course = await dbSession.findCourseByCode(req.params.course_code)
        // if (!course){
        //     throw new Error('Wrong course code!')
        // }
        // const quiz = await dbSession.createQuiz(course.code)
        // res.send(quiz) 
    }
    catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router