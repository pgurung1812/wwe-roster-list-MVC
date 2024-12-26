const mongoose=require("mongoose")

const superstarSchema= new mongoose.Schema({
    birthName:{
        type: String,
        required: true,
    },
    ringName:{
        type: String,
        required: true,
    },
    suspended:{
        type: Boolean,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}

)

module.exports=mongoose.model("Roster",superstarSchema)