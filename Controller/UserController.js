const User = require('../Model/UserModel')
const {DEC_PASS_HASH_KEY, JWT_PASS_HASH_KEY} = require('../Config/Config')
const {create_token} = require('../lib/lib')
const cryptoJS = require('crypto-js')

class UserController{
    async register(req,res){
        try{

        var {username,email,password} = req.body
        var usernameExists = await User.findOne({email})
        var useremailExists = await User.findOne({username})
        const encryption = cryptoJS.AES.encrypt(password,DEC_PASS_HASH_KEY).toString();
        if(usernameExists || useremailExists){
            return res.status(400).send("User already exists!")
        }

        const newUser = await User.create({
            username,
            email,
            password:encryption,
        })

        if(!newUser) return res.status(400).send('Bad Request')

            return res.status(201).json({ message: 'User Created Successfully', user: User });
                    
    }
    catch(err){
        console.log(err);
        return res.status(500).send(err)
        
    }
        
    }

//     async login(req,res){
//     try{

//         const {username,password} = req.body
//         const usernameExists = await User.findOne({username})
//         if(!usernameExists) return res.status(400).send('Invalid Username')
//         const pass_bytes = cryptojs.AES.decrypt(usernameExists.password,JWT_PASS_HASH_KEY)
//         const dec_password = pass_bytes.toString(cryptojs.enc.Utf8)
//         console.log(password,'---',dec_password)
//         if(password == dec_password){
//             return res.status(200).send("Success")
//         }
//         else{
//                 return res.status(400).send("Invalid password!")
//             }
//     } catch (err) {
//       console.log(err);
//       return res.status(500).send(err);
//     }
// }
async login(req, res) {
    try {
      const { username, password, token } = req.body;
      const user = await User.findOne({username})
      if(!user) return res.status(400).send("Invalid username!")
      const pass_bytes = cryptoJS.AES.decrypt(user.password, DEC_PASS_HASH_KEY)
      const dec_password = pass_bytes.toString(cryptoJS.enc.Utf8)
      
      if(password === dec_password){
        return res.status(200).send(create_token(user.id))
      }else{
        return res.status(400).send("Invalid password!")
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  }
}
    



module.exports = UserController