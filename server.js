const express = require("express");
const app = express();

app.use("/", function(req, res){
    res.send("express here");
})

app.listen(3001,function() {
    console.log("server started");
})