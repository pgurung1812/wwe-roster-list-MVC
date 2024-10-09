
const roster=require("../model/roster")

module.exports={

    getHome: async(request,response)=>{
       try{
         const listOfStars=await roster.find()
         const suspendCount=await roster.countDocuments({suspended:true})

         response.render("wwesuperstar.ejs",{wweSuperstars:listOfStars, suspensionCount:suspendCount})

       }catch(err){
        console.log(err)
       }
    },

    addToRoster: async (request,response)=>{
        try{
            console.log(request.body)
            const newStar=await roster.create({
                birthName: request.body.birthName,
                ringName: request.body.ringName,
                suspended: false
            })
            response.redirect("/roster")
        }
        catch(err){
           console.log(err)
        }
      

    },

    deleteRoster: async (request,response)=>{
        try{
            const deleteRoster= await roster.findOneAndDelete({_id:request.body.superstarIdFromJSFile})
            response.json(deleteRoster)
        }
            
        catch(err){
            console.log(err)
        }
         
        

    },

    markSuspend: async(request,response)=>{

        try{
               await roster.findOneAndUpdate({_id:request.body.superstarIdFromJSFile},{
                suspended:true
               })
               response.json("Superstar suspended")
        }
        catch(err){
           console.log(err)
        }

    },

    unSuspend: async(request,response)=>{

        try{
            await roster.findOneAndUpdate({_id:request.body.superstarIdFromJSFile},{
                suspended:false
               })
               response.json("Superstar suspended")
        }
        catch(err){
           console.log(err)
        }

    }



}