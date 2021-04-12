const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/:username,:password', async(req, res, next) => {

    try {
        let results = await db.login(req.params.username,req.params.password)
        
        if (results) {
            res.json({errNum: 0, errStr: "Success Login!", userData: results})
        } else {
            res.json({errNum: 1, errStr: "Login Failed!"})
        }
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})

module.exports = router