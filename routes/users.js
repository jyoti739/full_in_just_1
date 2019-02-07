const express = require('express')
const router =  express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Users = require('../models/users')
const jwt = require("jsonwebtoken")
const keys_from_config  = require('../config/keys').secret	
const passport  = require('passport')

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

//  add a user to the database (not now as we can only add user by registering only )
// router.post('/', (req, res, next)=>{
//     const newUserData  = new Users({
//          id : new mongoose.Types.ObjectId(),
//          firstName : req.body.firstName,
// 				 lastName : req.body.lastName,
// 				 name : req.body.name,
//          phone : req.body.phone,
//          email : req.body.email, 
//          password : req.body.password
//     })
//     newUserData.save().then(result => res.status(200).json(newUserData))
//     .catch(err => res.status(500).json({"error_message" : err}))
// })
// update/ patch to a user
router.patch('/:id', (req, res, next) =>{
    const id = req.params.id
    const edit_ops = {}
    for(const ops of req.body){
        edit_ops[ops.key] = ops.edited_value
    }
    Users.update({_id : id}, {$set : edit_ops}).exec().then(result => res.status(201).json(result))
    .catch(err => res.status(500).json(err))
})
// delete a user
router.delete('/:id', (req, res, next) =>{
    const id = req.params.id
    Users.remove({_id : id})
    .exec()
    .then(result => res.status(200).send("user is successfully removed from database"))
    .catch(err => res.status(500).send(err))
})

// register a user 
router.post('/register', (req, res, next) =>{
  Users.findOne({email : req.body.email}).then(user =>{
      if(user){
          return res.status(400).json({email : "User already exists!"})
      }else{
          const newUser = new Users({
              name : req.body.name,
              email : req.body.email,
							password : req.body.password,
							firstName : req.body.firstName,
							lastName : req.body.lastName,
							phone : req.body.phone
          })
          bcrypt.genSalt(10, (error, salt)=>{
              bcrypt.hash(newUser.password, salt, (err, hash)=>{
                if(err) {throw err;}
                newUser.password = hash
                newUser.save().then(user => res.json(user))
                .catch(error => res.send(error))
              })
          })
      }
  })  
})
// @routes GET /users/login
router.post('/login', (req, res)=>{
	const email = req.body.email
	const password = req.body.password
  console.log("password from upperside ", password)
	// find the user by email
	Users.findOne({email : email}).then(user =>{
		//check for the users 
		if(!user){
			console.log(user)
			return res.status(404).json({"message" : "User is not found!"})
		}//check password 
		bcrypt.compare(password, user.password)
		.then(match =>{
			if(match){
				// User method 
				const payload = {id : user._id, name : user.name} // create a JWT Payload
				//sign tokens
				jwt.sign(payload, keys_from_config, {expiresIn : 20}, (err, token)=>{
					res.json(
						{
							success : true,
							token : "Bearer " + token
						}
					)
					if(err) throw err;	
				})  // 20 in seconds
				console.log("this is ", password)
				res.json({message : "success"})
			}else res.status(400).json({"message" : "password is incorrect!"})
		})
	})
})
// return the current user whoever the token belongs to
//protected api using passport
// @Desc return current user
// Private
router.get('/current', passport.authenticate('jwt', {session : false}, (req, res)=>{
	res.json({message : "success"})
}))



//test to check fetch user matching by email
router.post('/login1', (req, res) =>{
	const email = req.body.email
	const password = req.body.password
	Users.findOne({email}).then(user => {
		if(!user){
			res.send("user is not found!")  //else res.send(user)
		}
		bcrypt.compare(password, user.password).then(match=>{
			res.status(500).send(match)	
		})
	})
})
module.exports = router	