const express = require('express')
const db = require('../db')

const router = express.Router()

router.post('/', async(req, res, next) => {
    
    try {
        let results = await db.insert(req.body)
        res.json({ errNum: 0, errMsg: "Success Insert Data!"})
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})

module.exports = router