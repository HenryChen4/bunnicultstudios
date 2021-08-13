const express = require("express")
const hbs = require("hbs")
const app = express()

const port = process.env.PORT || 8080

app.set("view engine", "hbs")
app.set("views", "")

app.get("", (req, res)=>{
    res.render("index")
})

app.listen(port, ()=>{
    console.log("Listening from server at port: "+port);
})