const express=require("express")
const router=express.Router()
const rosterController=require("../controller/rostercontroller")
const { ensureAuth } = require('../middleware/auth')

router.get("/",ensureAuth,rosterController.getHome)
router.post("/createRoster",ensureAuth,rosterController.addToRoster)
router.delete("/deleteRoster",rosterController.deleteRoster)
router.put("/updateRoster",rosterController.markSuspend)
router.put("/unSuspendRoster",rosterController.unSuspend)
module.exports=router