const express = require('express')
const db = require('../db')

const router = express.Router()

router.delete('/:id', async(req, res, next) => {

    try {
        let results = await db.deleteUser(req.params.id)
        res.json({ errNum: 0, errMsg: "Success Delete Data!"})
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }

})

module.exports = router