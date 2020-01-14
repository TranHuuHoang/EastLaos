const express = require('express')

const app = express()

//parse incoming JSON as object so we can access it in our request handler.
app.use(express.json())

module.exports = app