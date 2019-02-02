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

//  add a user to the database 
router.post('/', (req, res, next)=>{
    const newUserData  = new Users({
         id : new mongoose.Types.ObjectId(),
         firstName : "jyoti1",
         lastName : "luckie",
         phone : 8478234,
         gmail : "jyoti@luckie1.com"
    })
    newUserData.save().then(result => res.status(200).json(newUserData))
    .catch(err => res.status(500).json({"error_message" : err}))
})
// update/ patch to a user
router.patch('/:id', (req, res, next) =>{
    const id = req.params.id
    const edit_ops = {}
    for(const ops of req.params.body){
        edit_ops[ops.key] = ops.edited_value
    }
    Users.update({_id : id}, {$set : edit_ops}).exec().then(result => res.status(201).json(result))
    .catch(err => res.status(500).json(err))
})
// delete a user
router.delete('/id', (req, res, next) =>{
    const id = req.params.id
    Users.remove({_id : id})
    .exec()
    .then(result => res.status(200).send("user is successfully removed from database"))
    .catch(err => res.status(500).send(err))
})

module.exports = router