const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/tutors/signup', async (req, res) => {
    try {

    }
    catch(e){

    }
})

router.post('/tutors/login', async (req, res) => {
    try {

    }
    catch(e){

    } 
})

router.post('/tutors/logout', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

router.post('/tutor_regis_course', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

router.post('/tutor_unregis_course', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

module.exports = router