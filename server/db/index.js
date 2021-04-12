const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'user_management',
    host: 'localhost',
    port: '3306' 
})

let userDb = {}

userDb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM user_list`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })

    })

}

userDb.one = (id) => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM user_list where id = ${id}`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results[0])
        })

    })
}

userDb.update = (id, firstName, lastName, userType, username, password) => {

    return new Promise((resolve, reject) => {

        pool.query(`UPDATE user_list SET first_name=?, last_name=?, user_type=?, username=?, password=? WHERE id = ?`,[firstName, lastName, userType, username, password, id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })

    })
}

userDb.insert = (dataBody) => {

    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO user_list (first_name, last_name, user_type, username, password) values (?,?,?,?,?)`,[dataBody.firstName, dataBody.lastName, dataBody.userType, dataBody.username, dataBody.password], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })

    })
}

userDb.deleteUser = (id) => {

    return new Promise((resolve, reject) => {

        pool.query(`DELETE FROM user_list where id = ${id}`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })

    })
}

userDb.login = (username,password) => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM user_list where username= ? and password= ?`,[username, password], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results[0])
        })

    })
}

module.exports = userDb