const express = require('express')
const router = new express.Router()

router.get('/concac', async (req, res) => {
    try {
        res.send('con cac')
    }
    catch (e){
        res.status(404).send()
    }
})

module.exports = router