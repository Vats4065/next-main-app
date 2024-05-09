const express = require('express')
const db = require('./db')
const {signupRouter, loginRouter} = require('./signup.route')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.use(signupRouter)

app.use(loginRouter)

app.listen(8080, () => {
    console.log("server is running")
    db()
})