const app = require('express').Router()

//  Routes
const authRouter = require('./authRoutes')

app.use("/auth", authRouter)

module.exports = app;