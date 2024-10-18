const express=require("express")
const router=express.Router()
const homeController=require("../controller/homecontroller")
const authController=require("../controller/auth")

router.get("/",homeController.getHome)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports=router