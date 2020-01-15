const express = require('express')
const userRouter = require('../routers/userRouter')
const courseRouter = require('../routers/courseRouter')
const tutorMatchingRouter = require('../routers/tutorMatchingRouter')
const quizRouter = require('../routers/quizRouter')

const app = express()

//parse incoming JSON as object so we can access it in our request handler.
app.use(express.json())
app.use(userRouter)
app.use(courseRouter)
app.use(tutorMatchingRouter)
app.use(quizRouter)

module.exports = app