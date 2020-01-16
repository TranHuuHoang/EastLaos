const express = require('express')
const studentRouter = require('./routers/studentRouter')
const courseRouter = require('./routers/courseRouter')
const matchingRouter = require('./routers/matchingRouter')
const quizRouter = require('./routers/quizRouter')
const tutorRouter = require('./routers/tutorRouter')
const sqlinjection = require('sql-injection')

const app = express()

//parse incoming JSON as object so we can access it in our request handler.
app.use(sqlinjection)

app.use(express.json())
app.use(studentRouter)
app.use(courseRouter)
app.use(matchingRouter)
app.use(quizRouter)
app.use(tutorRouter)

module.exports = app