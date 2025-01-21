const express= require("express")
const app=express()
const mongoose=require("mongoose")
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB=require("./config/database")
require("dotenv").config({path:"./config/.env"})
// Passport config
require('./config/passport')(passport)

const PORT=3000
connectDB()
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))


// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING
      
      }),  
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
const homeRoutes=require("./routes/home")
const rosterRoutes=require("./routes/roster")


app.use("/",homeRoutes)
app.use("/roster",rosterRoutes)

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server is running, you better catch it!')
}) 