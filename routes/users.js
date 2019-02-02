const express = require('express')
const router =  express.Router()
const mongoose = require('mongoose')

const Users = require('../models/users')

// extract users
router.get('/', (req, res, next) =>{
    Users.find().exec().then(result => {
        if(result.length > 0){
            res.status(200).json(result)
        }else res.status(404).json({"message" : "no user in database"})
    }).catch(err => res.status(500).send(err))
})
// extract user by id 
router.get('/:id', (req, res, next) =>{
    const id = req.params.id
    Users.findById(id).exec().then(result =>{
        res.status(200).json(result)
    }).catch(err => res.status(500).send(err))
})

module.exports = router 