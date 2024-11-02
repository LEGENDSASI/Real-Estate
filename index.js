const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')
const userRouter = require('./Router/UserRouter')
const {PORT,connectDB} = require('./Config/Config')
require('dotenv').config();

var app = express()

app.use(cors())
app.use(body_parser.json())

connectDB();



app.use("/api/auth",userRouter)

app.get('/',(req,res)=>{
    res.send('Hello World');
})



app.listen(PORT, () =>{
 console.log(`Server running at: http://localhost:${PORT}`)
});




















// // import express (after npm install express)
// const express = require('express');
// var cors = require('cors')
// var app = express()
 
// app.use(cors())
// // server configuration
// const PORT = 8080;

// // create a route for the app
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// // make the server listen to requests
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}/`);
// });