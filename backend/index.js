const express = require('express')
const cors = require('cors')

const app = express()

//Config JSON Response
app.use(express.json())

//Solve cors
app.use(cors({ credentials: true, origin: 'http//localhost:3000' }))

//Public folder for images
app.use(express.static('public'))

//Routes
const UserRotues = require('./routes/UserRoutes')

app.use('/users', UserRotues)

app.listen(5000)
