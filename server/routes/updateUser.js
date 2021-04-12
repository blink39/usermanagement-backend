const express = require('express')
const db = require('../db')

const router = express.Router()

router.put('/:id,:firstName,:lastName,:userType,:username,:password', async(req, res, next) => {

    try {
        let results = await db.update(req.params.id, req.params.firstName, req.params.lastName, req.params.userType, req.params.username, req.params.password)
        res.json({ errNum: 0, errMsg: "Success Update Data!"})
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})

module.exports = router