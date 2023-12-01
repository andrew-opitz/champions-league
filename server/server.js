const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3333
const is_prod = process.env.NODE_ENV === 'production'
const path = require('path')

require('dotenv').config()

const db = require('./config/connection')

db.on('open', () => {
    app.listen(PORT, () => console.log('Server started on Port ', PORT))
})
