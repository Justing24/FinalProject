const express = require('express')
const router = express.Router()
const UserModel = require('../database/database.js')


router.post('/login',(req, res) => {
    
})

router.get('/logout', (req, res) => {
    
})

router.post('/register', (req, res) => {
    
    UserModel.create({username:req.body.username, password:req.body.password})
    res.send('user created.')
})


module.exports = router