const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/users', async (req, res) => {
    try {

    }
    catch(e){

    }
})

router.post('/users/login', async (req, res) => {
    try {

    }
    catch(e){

    } 
})

router.post('/users/logout', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})

module.exports = router