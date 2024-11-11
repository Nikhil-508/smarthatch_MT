const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./Routes/userRoutes')
const requestRoutes = require('./Routes/requestRoutes')
const departmentRoutes = require('./Routes/departmentRoutes')
const departmentHeadRoutes = require('./Routes/departmentHeadRoutes')

const app = express()
const port = process.env.PORT
const mongouri = process.env.MONGOURL

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/user',userRoutes)
app.use('/request',requestRoutes)
app.use('/department',departmentRoutes)
app.use('/departmentHead',departmentHeadRoutes)


app.listen(port,() => {
    console.log(`server is runnig on ${port}`)
})

mongoose.connect(mongouri)
.then(() => console.log('db connected'))
.catch((err) => console.log("db errorr",err))
