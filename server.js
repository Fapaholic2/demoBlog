const express = require("express")
const route = require("./Routes/post.route.js")

const app = express()

app.use(route)

app.listen(4000, () => {
    console.log("Server Connected!")
})