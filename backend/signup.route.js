const { Router } = require('express')
const signup = require('./signup.controller')
const login = require('./login.controller')

const signupRouter = Router()

signupRouter.post("/signup",signup)

const loginRouter = Router()

loginRouter.post("/login",login)

module.exports = {signupRouter,loginRouter}