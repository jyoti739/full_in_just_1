const JwtStratergy = require('passport-jwt').Stratergy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = mongoose.model('Users')
const keys = require("./keys")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secret = keys.secret

module.exports = passport =>{
    passport.use(new JwtStratergy(opts, (jwt_payload, done)=>{
			console.log(jwt_payload)
    })
  );
}