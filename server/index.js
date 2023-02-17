const express = require('express')
const app = express()
const port = 3002
const cors=require("cors")


const {connection}=require("./config/database")
const {UserRoute}=require("./routes/user.route")
const{UserChange}=require("./routes/userchange")
const{PostRoute}=require("./routes/posts.route")


app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.use("/auth",UserRoute)
app.use("/user",UserChange)
app.use("/post",PostRoute)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port,async () =>{
    await connection
    console.log("connected to db")
    console.log(` app listening on port ${port}!`)
} )