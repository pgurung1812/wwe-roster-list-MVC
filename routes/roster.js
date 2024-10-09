const express=require("express")
const router=express.Router()
const rosterController=require("../controller/rostercontroller")

router.get("/",rosterController.getHome)
router.post("/createRoster",rosterController.addToRoster)
router.delete("/deleteRoster",rosterController.deleteRoster)
router.put("/updateRoster",rosterController.markSuspend)
router.put("/unSuspendRoster",rosterController.unSuspend)
module.exports=router