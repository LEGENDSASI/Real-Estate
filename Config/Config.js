// db.js
const mongoose = require('mongoose');
require('dotenv').config();

// Replace <username>, <password>, and <your-database-name> with your actual credentials and database name
const MONGO_URI = process.env.MONGO_URI
exports.PORT = process.env.PORT
exports.DEC_PASS_HASH_KEY = process.env.DEC_PASS_HASH_KEY
exports.JWT_PASS_HASH_KEY = process.env.JWT_PASS_HASH_KEY


exports.connectDB = () => {
    mongoose.connect(MONGO_URI).then((con)=>{      
        console.log('mongodb connected successfully on port '+con.connection.host);
        
    }).catch((err)=>console.log(err));
    
};

