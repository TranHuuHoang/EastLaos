const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/quiz_mark', async (req, res) => {
    try {
        res.send("Cac")
    }
    catch (e){
        res.send(e.message)
    }
})

router.get('/leaderboard', auth, async (req, res) => {
    try {

    }
    catch (e){
        
    }
})


module.exports = router