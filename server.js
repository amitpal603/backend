const express = require('express')
require('dotenv').config()
const helmet = require('helmet')
const connectDB = require('./config/db')
const todoRoute = require('./routers/todoRoute')


connectDB()
const app = express()
app.use(helmet())
app.use(express.json({limit : '10mb'}))
app.use('/api/todo' , todoRoute)
app.get('/' , (req , res) => {
    res.send('Hello Guys !')
})

const PORT = process.env.PORT || 4000
app.listen(PORT , () => console.log(`server running http://localhost:${PORT}`))
