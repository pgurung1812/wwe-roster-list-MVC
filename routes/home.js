const express=require("express")
const router=express.Router()
const homeController=require("../controller/homecontroller")

router.get("/",homeController.getHome)
module.exports=router