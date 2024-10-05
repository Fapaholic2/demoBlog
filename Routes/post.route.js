const express = require("express")

const route = express.Router()

route.get("/home", (req, res) => {
    res.send("Welcome home!")
})

route.get("/contact", (req, res) => {
    res.send("Welcome to Contacts!")
})

route.get("/about", (req, res) => {
    res.send("Welcome to about!")
})

module.exports = route