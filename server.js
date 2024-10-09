const express= require("express")
const app=express()
const connectDB=require("./config/database")
require("dotenv").config({path:"./config/.env"})

const PORT=3000
connectDB()
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const homeRoutes=require("./routes/home")
const rosterRoutes=require("./routes/roster")










app.use("/",homeRoutes)
app.use("/roster",rosterRoutes)






app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server is running, you better catch it!')
}) 