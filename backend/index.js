const express = require("express");
var cors = require('cors');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send({"<backendlink>/":"default route (add all routes here to show at home page of backend server )"})
})

app.listen(process.env.serverPort, async()=>{
    try {
        console.log("Server: "+process.env.serverPort);
    } catch (error) {
        console.log("Error: "+error.message);
    }
})