const jwt = require("jsonwebtoken")
const {JWT_PASS_HASH_KEY} = require('../Config/Config')

exports.create_token = (value) =>{
    const token = jwt.sign({id: value}, JWT_PASS_HASH_KEY, {expiresIn: "1h"})
    return token
}

exports.verify_token = (token) =>{
    const data = jwt.verify(token, JWT_PASS_HASH_KEY)
    return data
}