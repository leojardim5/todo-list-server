const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const routes = require('./routes') 


const server = express()

server.use(cors())
server.use(express.json())
server.use(bp.urlencoded({extended:true}))
server.use(routes)

server.listen(3001, ()=>{
    console.log("Server running on 3001")
})