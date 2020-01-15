const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/course_details', auth, async(req, res) => {
    try {

    }
    catch (e) {

    }
})

router.post('/courses', auth, async(req, res) => {
    try {
    }
    catch (e){

    }
})

module.exports = router