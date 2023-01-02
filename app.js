const express = require("express");
const app = express();
const path = require("path");


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Se prendió en el puerto ${PORT}`)
    ;
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"views/home.html"));
})

app.get("/registro",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"views/register.html"));
})

app.get("/login",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"views/login.html"));
})