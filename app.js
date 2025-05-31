const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const blogRoute = require("./route/blogRoute")
const userRoute = require("./route/userRoute")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("home")
})


app.use('/api/blog', blogRoute)
app.use('/api/user', userRoute)

app.listen(process.env.PORT)

async function DB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

DB()
