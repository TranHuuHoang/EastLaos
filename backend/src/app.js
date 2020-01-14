const express = require('express')
const userRouter = require('../routers/userRouter')

const app = express()

//parse incoming JSON as object so we can access it in our request handler.
app.use(express.json())
app.use(userRouter)

module.exports = app