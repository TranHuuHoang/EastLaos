const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/students', async (req, res) => {
    try {

    }
    catch(e){

    }
})

router.post('/students/login', async (req, res) => {
    try {

    }
    catch(e){

    } 
})

router.post('/students/logout', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

router.post('/student_regis_course', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

router.post('/student_unregis_course', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

module.exports = router