const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const updateUser = require('./routes/updateUser')
const insertUser = require('./routes/insertUser')
const deleteUser = require('./routes/deleteUser')
const loginUser = require('./routes/loginUser')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', routes)
app.use('/api/user/update', updateUser)
app.use('/api/user/insert', insertUser)
app.use('/api/user/delete', deleteUser)
app.use('/api/user/loginUser', loginUser)

app.listen(3001, () => {
    console.log(`Server is running on poert: 3001`)
})