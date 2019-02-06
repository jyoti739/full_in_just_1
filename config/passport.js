const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const mongoose1 = mongoose.model('Users')
const keys = require("./keys")

const opts = {}
opts.secretOrKey = keys.secret
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secret = keys.secret

module.exports = passport =>{
    passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
      console.log('will do anyway in future')
    })
  );
}