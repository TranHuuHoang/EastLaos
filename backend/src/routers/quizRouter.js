const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/quiz_mark', auth, async (req, res) => {
    try {

    }
    catch (e){

    }
})

router.get('/leaderboard', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})


module.exports = router