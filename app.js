const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () =>{
    console.log("se prendió");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"views/home.html"));
})