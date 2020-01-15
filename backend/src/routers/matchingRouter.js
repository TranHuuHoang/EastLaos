const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/match', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

router.get('/subject', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

router.post('/student_match', auth, async (req, res) => {
    try {

    }   
    catch (e){

    }    
})

router.post('/tutor_match', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

module.exports = router