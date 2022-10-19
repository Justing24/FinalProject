const express = require('express')
const app = express()
const port = 3000
const LoginRouter = require('./routes/login')
const ProfileRouter = require('./routes/profile')


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:root@cluster0.ncrlwhu.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('db connected')
})


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html') // send home page
})

app.use(LoginRouter)
app.use(ProfileRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})